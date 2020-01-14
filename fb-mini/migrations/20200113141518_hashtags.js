exports.up = async knex => knex.schema.createTable('hashtags', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('text')
    .notNullable()
    .unique()
})

exports.down = async knex => knex.schema.dropTableIfExists('hashtags')
