const { Op } = require('sequelize')

const { Err } = require('../utils/Errors')
const GoodsType = require('../model/goods_type.model')

class GoodsTypeDao {
  static async create(model) {
    const { goods_type_name } = model
    const count = await GoodsType.count({
      where: {
        goods_type_name,
      },
    })
    if (count > 0) {
      throw new Err('物料种类已存在', model)
    }

    const res = await GoodsType.create(model)
    return res.dataValues
  }

  static async update(id, model) {
    const { goods_type_name } = model
    const count = await GoodsType.count({
      where: {
        goods_type_name: goods_type_name,
        id: { [Op.not]: id },
      },
    })
    if (count > 0) {
      throw new Err('物料种类已存在', model)
    }

    const res = await GoodsType.update(model, { where: { id } })
    return res[0] > 0 ? true : false
  }

  static async remove(id, { user_code }) {
    const res = await GoodsType.update(
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

  static async find({ goods_type_name }) {
    let where = {}

    if (goods_type_name) {
      where.goods_type_name = {
        [Op.like]: `%${goods_type_name}%`,
      }
    }

    const res = await GoodsType.scope('normal').findAll({
      where,
      order: [['updated_at', 'desc']],
    })
    return res
  }
}

module.exports = {
  GoodsTypeDao,
}
