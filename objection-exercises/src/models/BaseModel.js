const { Model } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class BaseModel extends Model {
  // static get columnNameMappers() {
  //  return snakeCaseMappers()
  // }
  async $beforeUpdate(opt, queryContext) {
    const date = new Date()
    this.updated_at = date
  }
}

module.exports = BaseModel
