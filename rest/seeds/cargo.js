
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cargo').del()
    .then(function () {
      // Inserts seed entries
      return knex('cargo').insert([
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
      ]);
    });
};

