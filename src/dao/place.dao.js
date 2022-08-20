const { Op } = require('sequelize')

const { Err } = require('../utils/Errors')
const Place = require('../model/place.model')

class PlaceDao {
  static async create(model) {
    const { place_name } = model
    const count = await Place.count({
      where: {
        place_name,
      },
    })
    if (count > 0) {
      throw new Err('存放位置已存在', model)
    }

    const res = await Place.create(model)
    return res.dataValues
  }

  static async update(id, model) {
    const { place_name } = model
    const count = await Place.count({
      where: {
        place_name: place_name,
        id: { [Op.not]: id },
      },
    })
    if (count > 0) {
      throw new Err('存放位置已存在', model)
    }

    const res = await Place.update(model, { where: { id } })
    return res[0] > 0 ? true : false
  }

  static async remove(id, { user_code }) {
    const res = await Place.update(
      {
        deleted_by: user_code,
        deleted_at: Date.now(),
      },
      {
        where: { id },
      },
    )
    return res
  }

  static async find({ place_name }) {
    let where = {}

    if (place_name) {
      where.place_name = {
        [Op.like]: `%${place_name}%`,
      }
    }

    const res = await Place.scope('normal').findAll({
      where,
      order: [['updated_at', 'desc']],
    })
    return res
  }
}

module.exports = {
  PlaceDao,
}
