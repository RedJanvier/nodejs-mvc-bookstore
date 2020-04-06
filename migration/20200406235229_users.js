exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.integer('age');
        table.string('gender').notNullable();
        table.timestamp('created_at');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
