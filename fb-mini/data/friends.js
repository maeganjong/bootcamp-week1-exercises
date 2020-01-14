const casual = require('casual')
const usersData = require('./users')

casual.define('friends', (followerId, followingId) => ({
  followerId,
  followingId,
  status: casual.random_element(['ACCEPTED', 'DECLINED', 'REQUESTED']),
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const friendsData = []

for (let i = 0; i < 20; ++i) {
  const followerId = casual.random_element(usersData).id
  const followingId = casual.random_element(usersData).id
  friendsData.push(casual.friends(followerId, followingId))
}

module.exports = friendsData
