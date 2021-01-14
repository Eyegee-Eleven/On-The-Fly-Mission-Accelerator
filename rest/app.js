const express = require('express');
const app = express();
const port = 3001;
const knex = require('knex')(require('./knexfile.js').development)

app.use(express.json());

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


const appListening = app.listen(port, ()=> console.log("Listening on "+ port));

module.exports={app, appListening, knex};