const { Op } = require('sequelize')

const { Err } = require('../utils/Errors')
const GoodsState = require('../model/goods_state.model')

class GoodsStateDao {
  static async create(model) {
    const { goods_state_name } = model
    const count = await GoodsState.count({
      where: {
        goods_state_name,
      },
    })
    if (count > 0) {
      throw new Err('物料状态已存在', model)
    }

    const res = await GoodsState.create(model)
    return res.dataValues
  }

  static async update(id, model) {
    const { goods_state_name } = model
    const count = await GoodsState.count({
      where: {
        goods_state_name: goods_state_name,
        id: { [Op.not]: id },
      },
    })
    if (count > 0) {
      throw new Err('物料状态已存在', model)
    }

    const res = await GoodsState.update(model, { where: { id } })
    return res[0] > 0 ? true : false
  }

  static async remove(id, { user_code }) {
    const res = await GoodsState.update(
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

  static async find({ goods_state_name }) {
    let where = {}

    if (goods_state_name) {
      where.goods_state_name = {
        [Op.like]: `%${goods_state_name}%`,
      }
    }

    const res = await GoodsState.scope('normal').findAll({
      where,
      order: [['updated_at', 'desc']],
    })
    return res
  }
}

module.exports = {
  GoodsStateDao,
}
