const casual = require('casual')

casual.define('hashtags', () => ({
  id: casual.uuid,
  text: casual.string,
}))

const hashtagsData = []

for (let i = 0; i < 20; ++i) {
  hashtagsData.push(casual.hashtags)
}

module.exports = hashtagsData
