const {app, appListening, knex} = require('./app.js');
const request = require('supertest')(app);


const mockGetFormF = [{
	id: 1,
	tail: "0026",
	date: "2021-01-12T07:00:00.000Z",
	from: "KABQ",
	to: "KABQ",
	mission: "TRANING",
	basic_weight: 36000,
	basic_moment: 11000,
	crew_weight: 660,
	crew_moment: 57,
	fuel_weight: 8500,
	fuel_moment: 2700,
	kit: "[{name: 'Fire extinguisher', weight: 20, moment: 5},{name: 'Rescue seat', weight: 35, moment: 15}]",
	cargo: "[{name: '2 pax', weight: 500, moment: 250},{name: '600RDS', weight: 210, moment: 50}]"
}];

const mockCommon = {
	kit: [
		{
			name: 'Axe',
			weight: 12,
			arm: 602
		},
		{
			name: 'Blanket',
			weight: 5,
			arm: 300
		}],
	cargo:
	[
		{
			name: 'Strop',
			weight: 30,
			arm: 600
		},
		{
			name: 'Fire Extinguisher',
			weight: 15,
			arm: 400
		}
	]
}

const mockList = [
		{
			id: 1,
			tail: "0026",
			mission: "TRANING",            
			date: "2021-01-12T07:00:00.000Z"
		},
		{
			id: 2,
			tail: "0044",
			mission: "PAX TRANS",
			date: "2022-01-12T07:00:00.000Z"
		}
]

beforeAll(async () => {
	await knex.migrate.rollback();
	await knex.migrate.latest();
	await knex.seed.run();
})

afterAll(async (done) => {
	await knex.destroy();
	appListening.close();
	done();
});

describe("REST API", () => {

	it(`/details should return a singular formf object`, done => {
		request.get('/details/1').expect(200)
									.then(res => {
										expect(res.body).toEqual(mockGetFormF);
										done();
									})
									.catch(err => done(err))
	})
	it('/common returns object with two arrays, kit and cargo', done => {
		request.get('/common').expect(200)
								.then(res => {
									const cargo=res.body.cargo;
									const kit=res.body.kit;
									for (let i=0;i<cargo.length;i++){
										delete cargo[i].id;
									}
									for (let i=0;i<kit.length;i++){
										delete kit[i].id;
									}
									expect(res.body).toEqual(mockCommon);
									done();
								})
	})
	
	it('/list returns tail, mission, date created, and form id', done=>{
		request.get('/list').expect(200)
							.then(res => {
								expect(res.body).toEqual(mockList);
								done();
							})
							.catch(err => done(err))
	})
})
