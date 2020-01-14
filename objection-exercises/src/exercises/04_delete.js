const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  const goneCat = await Pet.query().delete().where('type', 'CAT').returning('*')
  console.log(goneCat)
  // -----
  cleanup()
}

run()
