const { Op } = require('sequelize')

const { Err } = require('../utils/Errors')
const Vendor = require('../model/vendor.model')

class VendorDao {
  static async create(model) {
    const { vendor_name } = model
    const count = await Vendor.count({
      where: {
        vendor_name,
      },
    })
    if (count > 0) {
      throw new Err('供应商已存在', model)
    }

    const res = await Vendor.create(model)
    return res.dataValues
  }

  static async update(id, model) {
    const { vendor_name } = model
    const count = await Vendor.count({
      where: {
        vendor_name: vendor_name,
        id: { [Op.not]: id },
      },
    })
    if (count > 0) {
      throw new Err('供应商已存在', model)
    }

    const res = await Vendor.update(model, { where: { id } })
    return res[0] > 0 ? true : false
  }

  static async remove(id, { user_code }) {
    const res = await Vendor.update(
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

  static async find({ vendor_name }) {
    let where = {}

    if (vendor_name) {
      where.vendor_name = {
        [Op.like]: `%${vendor_name}%`,
      }
    }

    const res = await Vendor.scope('normal').findAll({
      where,
      order: [['updated_at', 'desc']],
    })
    return res
  }
}

module.exports = {
  VendorDao,
}
