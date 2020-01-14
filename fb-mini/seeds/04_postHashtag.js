const postHashtagData = require('../data/postHashtag')

exports.seed = knex => knex('postHashtag').del()
  .then(() => knex('postHashtag').insert(postHashtagData))
