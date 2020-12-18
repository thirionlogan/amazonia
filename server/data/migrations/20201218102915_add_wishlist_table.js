exports.up = (knex) => {
  return knex.schema.createTable('wishlist', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('author');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('wishlist');
};
