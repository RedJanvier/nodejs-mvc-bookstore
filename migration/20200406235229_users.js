`CREATE TABLE borrowers (
id SERIAL PRIMARY KEY, 
name VARCHAR(100) NOT NULL,
email VARCHAR(100) unique NOT NULL, 
password VARCHAR(255) NOT NULL, 
age SMALLINT, 
gender text NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
exports.up = function(knex) {
    knex.createTable('borrowers', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.integer('age');
        table.string('gender').notNullable();
        table.timestamp('created_at');
    });
  
};

exports.down = function(knex) {
    knex.dropTable('borrowers');
};
