const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const person = await User.query().first()

  console.log(person)
  console.log(person.fullName)
  console.log(person.isYoung)

  const pet = await Pet.query().first()

  console.log(pet)
  console.log(pet.fullInfo)
  console.log(pet.isCool)

  const relation = await Relation.query().first()
  const child = await relation.getChild()

  console.log(child)

  // -----
  cleanup()
}

run()
