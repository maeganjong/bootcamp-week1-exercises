const casual = require('casual')
const usersData = require('./users')

casual.define('post', ownerId => ({
  id: casual.uuid,
  ownerId,
  bio: casual.text,
  likes: casual.integer(0, 200000),
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const postData = []

for (let i = 0; i < 20; ++i) {
  const ownerId = casual.random_element(usersData).id
  postData.push(casual.post(ownerId))
}

module.exports = postData
