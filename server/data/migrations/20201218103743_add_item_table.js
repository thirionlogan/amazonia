exports.up = (knex) => {
  return knex.schema.createTable('item', (table) => {
    table.increments('id').primary();
    table.integer('wishlist_id');
    table.foreign('wishlist_id').references('id').inTable('wishlist');
    table.string('name');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('item');
};
