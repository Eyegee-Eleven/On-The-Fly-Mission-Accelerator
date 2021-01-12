
exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('formf').del()
		.then(function () {
			// Inserts seed entries
			return knex('formf').insert(
				[
					{
						tail: "0026",
						date: knex.fn.now(),
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
					},
					{
						tail: "0044",
						date: knex.fn.now(),
						from: "KCVS",
						to: "KABQ",
						mission: "PAX TRANS",
						basic_weight: 36000,
						basic_moment: 11000,
						crew_weight: 660,
						crew_moment: 57,
						fuel_weight: 8500,
						fuel_moment: 2700,
						kit: "[{name: 'Fire extinguisher', weight: 20, moment: 5},{name: 'Rescue seat', weight: 35, moment: 15}]",
						cargo: "[{name: '2 pax', weight: 500, moment: 250},{name: '600RDS', weight: 210, moment: 50}]"
					}
				]
			);
		});
};
