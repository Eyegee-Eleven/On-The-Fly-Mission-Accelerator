const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001;

let knex=null;
const knexConnectionProfile=process.env.DOCKERIZED?'docker':'development';
let knexConnectionAttempt=0;
const knexConnectionAttemptMax=60;

app.use(cors())
app.use(express.json());

knexTryConnect();

function knexTryConnect(){
    if (knexConnectionAttempt<=knexConnectionAttemptMax){
        knexConnectionAttempt++;
        try {
            console.log("Trying to connect...")

			knex = require('knex')(require('./knexfile.js')[knexConnectionProfile])

            //Create scheme and seed data if table doesnt exist
            knex.schema.hasTable('formf').then(function(exists) {
                if (!exists){
                    return knex.migrate.latest().then( ()=>{
                        return knex.seed.run().then( ()=>{
                            console.log("Success, schema and seed file ran!")
                            knexDidConnect();
                        });
                    });
                }else{
                    console.log("Success!")
                    knexDidConnect();
                }
            }).catch( err => {
                console.log("Failed to connect, trying again in 1 second.")
                setTimeout(knexTryConnect, 1000);
            });

        }catch (err){
            console.log("Failed to connect, trying again in 1 second.")
            setTimeout(knexTryConnect, 1000);
        }
        
    }else{
        throw Error("Failed to connect, max attempts, not trying again.");
    }
}

function knexDidConnect(){
	app.get('/details/:id', (req,res) => {
		knex('formf')
			.select('*')
			.where('id', req.params.id)
			.then(data => res.status(200).send(data))
			.catch(err =>
				res.status(404).json({
					message:
						'404 not found'
				}))
	})
	
	app.get('/common', (req,res) => {
		knex('kit')
			.select('*')
			.then( kitData => {
				knex('cargo')
				.select('*')
				.then( cargoData => {
					res.status(200).send({kit: kitData, cargo: cargoData});
				});
				
			})
			.catch(err =>
				res.status(404).json({
					message:
						'404 not found'
				}))
	})

	app.get('/list', (req,res) => {
		knex('formf')
			.select('*')
			.then(formfs => {
				let listArray = [];
				for (let formf of formfs){
					listArray.push({id: formf.id, tail: formf.tail, mission: formf.mission, date: formf.date});
				}
				
				res.status(200).send(listArray);
			})
			.catch(err =>
				res.status(404).json({
					message:
						'404 not found'
				}))
	})

	app.post('/details', (req,res) => {
		knex('formf').insert(
			{
				tail: req.body.tail,
				date: req.body.date,
				from: req.body.from,
				to: req.body.to,
				mission: req.body.mission,
				basic_weight: req.body.basic_weight,
				basic_moment: req.body.basic_moment,
				crew_weight: req.body.crew_weight,
				crew_moment: req.body.crew_moment,
				fuel_weight: req.body.fuel_weight,
				fuel_moment: req.body.fuel_moment,
				kit: req.body.kit,
				cargo: req.body.cargo
			})
			.returning('*')
			.then( data => res.status(200).send(data) )
			.catch(() => res.sendStatus(406).json({
				message: '406 not acceptable'
			}))
	})

	app.put('/details', (req, res) => {
		knex('formf')
			.update(req.body)
			.where('id', req.body.id)
			.returning('*')
			.then( data => res.status(200).send(data) )
			.catch( () =>{
				res.sendStatus(418).json({
					message: '418 I am a teapot'
				})
			})
	});
}

const appListening = app.listen(port, ()=> console.log("Listening on "+ port));
module.exports={app, appListening, knex};