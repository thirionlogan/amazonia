exports.up = (knex) => {
    return knex.schema.table('item', (table) => {
         table.boolean('Reserved')
             .notNullable()
             .defaultTo(0)
     })
 };
 
 exports.down = (knex) => {
     return knex.schema.table('item', (table) => {
         table.dropColumn('Reserved')
     })
 };