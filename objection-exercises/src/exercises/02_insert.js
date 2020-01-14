const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  /* const me = await User.query().insert({
    firstName: 'Maegan',
    lastName: 'Jong',
    age: '19',
    email: 'some@wo.o',
  }).returning('*') */

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const pet = await Pet.query().insert({
    ownerId: '98ea6d3c-50f6-4467-a731-c4d99a2bb45a',
    type: 'CAT',
    name: 'Bimbo',
  }).returning('*')

  // -----
  cleanup()
}

run()
