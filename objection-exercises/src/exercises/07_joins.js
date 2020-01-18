const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  // const userpet = await User.query().withGraphFetched('pets')
  // console.log(userpet)

  // Get all users, their pets, AND their children
  // const userpetchildren = await User.query().withGraphFetched('[pets, children]')
  // console.log(userpetchildren)

  // Get all users, their parents, and their grandparents
  const userparentgrand = await User.query().withGraphFetched('[parents.parents]')
  console.log(userparentgrand)
  console.log(userparentgrand[0].parents[0])
  // Get all users, their pets, their chilren, and their childrens' pets
  const userpetchildrenpet = await User.query().withGraphFetched('[pets, children.pets]')
  console.log(userpetchildrenpet)
  console.log(userpetchildrenpet[0].children[0])
  // -----
  cleanup()
}

run()
