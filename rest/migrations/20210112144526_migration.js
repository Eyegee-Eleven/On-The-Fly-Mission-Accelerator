
exports.up = function(knex) {
    return knex.schema
        .createTable('formf', table => {
            table.increments('id');
            table.string('tail');
            table.date('date');
            table.string('from');
            table.string('to');
            table.string('mission');
            table.float('basic_weight');
            table.float('basic_moment');
            table.float('crew_weight');
            table.float('crew_moment');
            table.float('fuel_weight');
            table.float('fuel_moment');
            table.string('kit', 1000); 
            table.string('cargo', 1000);
        })
        .createTable('cargo', table =>{
            table.increments('id');
            table.string('name').notNullable();
            table.float('weight');
            table.float('arm');
        })
        .createTable('kit', table =>{
            table.increments('id');
            table.string('name').notNullable();
            table.float('weight');
            table.float('arm');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('kit').dropTableIfExists('cargo').dropTableIfExists('formf');
};
