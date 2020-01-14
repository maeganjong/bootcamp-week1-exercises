const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  firstname: casual.string,
  lastname: casual.string,
  email: casual.email,
  dob: casual.date(),
  password: casual.string,
  bio: casual.sentences(),
  rel_stat: casual.random_element(['SINGLE', 'MARRIED', 'IN A RELATIONSHIP', 'COMPLICATED']),
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
