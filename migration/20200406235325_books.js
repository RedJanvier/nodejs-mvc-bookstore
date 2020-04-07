
exports.up = function(knex) {
  return knex.schema.createTable('books', table => {
    table.increments();
    table.string('title');
    table.string('description');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};
