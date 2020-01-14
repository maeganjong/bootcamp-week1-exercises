const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const gabrielUser = await User.query().where('firstName', 'Palma')
  console.log(gabrielUser)

  // Do the same with object notation
  const gabrielUserObj = await User.query().where({ firstName: 'Palma' })
  console.log(gabrielUserObj)

  // Get all DOGS and BIRDS
  const dogsBirds = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(dogsBirds)

  // -----
  cleanup()
}

run()
