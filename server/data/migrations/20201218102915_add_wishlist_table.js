exports.up = (knex) => {
  return knex.schema
    .createTable('wishlist', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('author').notNullable();
    })
    .createTable('item', (table) => {
      table.increments('id').primary();
      table
        .integer('wishlist_id')
        .references('wishlist.id')
        .onDelete('CASCADE');
      table.string('name').notNullable();
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('item').dropTableIfExists('wishlist');
};
