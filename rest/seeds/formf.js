
exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('formf').del()
		.then(function () {
			// Inserts seed entries
			return knex('formf').insert(
				[
					{
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
						kit: '[{"name": "Fire extinguisher", "weight": 20, "arm": 5},{"name": "Rescue seat", "weight": 35, "arm": 15}]',
						cargo: '[{"name": "2 pax", "weight": 500, "arm": 250},{"name": "600RDS", "weight": 210, "arm": 50}]'					},
					{
						tail: "0044",
						date: "2022-01-12T07:00:00.000Z",
						from: "KCVS",
						to: "KABQ",
						mission: "PAX TRANS",
						basic_weight: 36000,
						basic_moment: 11000,
						crew_weight: 660,
						crew_moment: 57,
						fuel_weight: 8500,
						fuel_moment: 2700,
						kit: '[{"name": "Fire extinguisher", "weight": 20, "arm": 5},{"name": "Rescue seat", "weight": 35, "arm": 15}]',
						cargo: '[{"name": "2 pax", "weight": 500, "arm": 250},{"name": "600RDS", "weight": 210, "arm": 50}]'
					}
				]
			);
		});
};
