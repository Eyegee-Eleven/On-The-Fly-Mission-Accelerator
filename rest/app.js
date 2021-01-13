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

const appListening = app.listen(port, ()=> console.log("Listening on "+ port));

module.exports={app, appListening, knex};