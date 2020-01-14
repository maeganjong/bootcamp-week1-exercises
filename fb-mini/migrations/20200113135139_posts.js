exports.up = async knex => knex.schema.createTable('posts', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('ownerId')
    .references('users.id')
    .notNullable()
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table
    .text('bio', 'longtext')
    .notNullable()

  table
    .integer('likes')
    .notNullable()
    .defaultTo(0)

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
