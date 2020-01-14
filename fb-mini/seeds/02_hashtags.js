const hashtagsData = require('../data/hashtags')

exports.seed = knex => knex('hashtags').del()
  .then(() => knex('hashtags').insert(hashtagsData))
