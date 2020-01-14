exports.up = async knex => knex.schema.createTable('postHashtag', table => {
  table
    .uuid('postId').references('posts.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table
    .uuid('hashtagId').references('hashtags.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
})

exports.down = async knex => knex.schema.dropTableIfExists('postHashtag')
