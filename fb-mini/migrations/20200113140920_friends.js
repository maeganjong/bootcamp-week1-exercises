exports.up = async knex => knex.schema.createTable('friends', table => {
  table
    .uuid('followerId').references('users.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table
    .uuid('followingId').references('users.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table
    .enum('status', ['ACCEPTED', 'DECLINED', 'REQUESTED'])

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')
