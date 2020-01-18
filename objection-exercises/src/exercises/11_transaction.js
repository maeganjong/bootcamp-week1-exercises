const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */

  const scrappy = await User.transaction(async trx => {
    const person = await User.query(trx)
      .insert({
        firstName: 'Jennifer', lastName: 'Lawrence', email: 'yo@yo.2', age: 15,
      })

    const addPet = await person.$relatedQuery('pets', trx)
      .insert({ name: 'Bo', type: 'DOG' })

    const count = await Pet.query().resultSize()

    if (count > 15) {
      const remove = await Pet.query().delete().where('type', 'BIRD')
    }

    // throw new Error('Database interaction failed!')
    return person
  })

  console.log(scrappy)

  // -----
  cleanup()
}

run()
