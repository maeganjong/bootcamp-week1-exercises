exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table
    .string('firstname')
    .notNullable()

  table
    .string('lastname')
    .notNullable()

  table
    .date('dob')

  table
    .string('password')
    .notNullable()

  table
    .string('bio')

  table
    .enum('rel_stat', ['SINGLE', 'MARRIED', 'IN A RELATIONSHIP', 'COMPLICATED'])

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
