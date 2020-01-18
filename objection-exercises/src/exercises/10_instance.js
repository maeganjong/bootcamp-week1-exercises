const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const maegan = await User.query().findById('98ea6d3c-50f6-4467-a731-c4d99a2bb45a')

  // Use that instance to create a new pet related that user
  const insert = await maegan.$relatedQuery('pets').insert({ name: 'himmy', type: 'BIRD' })
  console.log(insert)

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const fetch = await maegan.$fetchGraph('[pets, children]')
  console.log(fetch)

  // -----
  cleanup()
}

run()
