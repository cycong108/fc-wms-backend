const { Op } = require('sequelize')

const { Err } = require('../utils/Errors')
const { Goods, GoodsType, Place, Vendor } = require('../model/goods.model')

class GoodsDao {
  static async create(model) {
    const { spec } = model
    const count = await Goods.count({
      where: {
        spec,
      },
    })
    if (count > 0) {
      throw new Err('物料规格已存在', model)
    }

    const res = await Goods.create(model)
    return res.dataValues
  }

  static async update(id, model) {
    const { spec } = model
    const count = await Goods.count({
      where: {
        spec: spec,
        id: { [Op.not]: id },
      },
    })
    if (count > 0) {
      throw new Err('物料规格已存在', model)
    }

    const res = await Goods.update(model, { where: { id } })
    return res[0] > 0 ? true : false
  }

  static async remove(id, { user_code }) {
    const res = await Goods.update(
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

  static async find({ spec, goods_type_id, default_vendor_id }) {
    let where = {}

    if (spec) {
      where.spec = {
        [Op.like]: `%${spec}%`,
      }
    }
    if (goods_type_id) {
      where.goods_type_id = goods_type_id
    }
    if (default_vendor_id) {
      where.default_vendor_id = default_vendor_id
    }

    const res = await Goods.scope('normal').findAll({
      where,
      order: [['updated_at', 'desc']],
      include: [
        {
          model: GoodsType,
          as: 'goods_type_info',
          attributes: ['id', 'goods_type_name'],
          paranoid: false,
        },
        {
          model: Place,
          as: 'place_info',
          attributes: ['id', 'place_name'],
          paranoid: false,
        },
        {
          model: Vendor,
          as: 'default_vendor_info',
          attributes: ['id', 'vendor_name'],
          paranoid: false,
        },
      ],
    })
    return res
  }
}

module.exports = {
  GoodsDao,
}
