const casual = require('casual')
const postData = require('./posts')
const hashtagData = require('./hashtags')

casual.define('postHashtagData', (postId, hashtagId) => ({
  postId,
  hashtagId,
}))

const postHashtagData = []

for (let i = 0; i < 20; ++i) {
  const postId = casual.random_element(postData).id
  const hashtagId = casual.random_element(hashtagData).id
  postHashtagData.push(casual.postHashtagData(postId, hashtagId))
}

module.exports = postHashtagData
