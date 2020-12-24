exports.up = (knex) => {
    return knex.schema.table('item', (table) => {
         table.boolean('reserved')
             .notNullable()
             .defaultTo(0)
     })
 };
 
 exports.down = (knex) => {
     return knex.schema.table('item', (table) => {
         table.dropColumn('reserved')
     })
 };