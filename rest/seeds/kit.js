
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('kit').del()
    .then(function () {
      // Inserts seed entries
      return knex('kit').insert([
        {
          name: 'Axe',
          weight: 12,
          arm: 602
        },
        {
          name: 'Blanket',
          weight: 5,
          arm: 300
        }
      ]);
    });
};
