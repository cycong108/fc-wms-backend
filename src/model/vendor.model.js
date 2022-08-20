const { DataTypes } = require('sequelize')
const seq = require('../utils/seq')

const Vendor = seq.define('m_vendor', {
  vendor_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '供应商名称',
  },
  remark: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '备注',
  },
  created_by: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '添加人员',
  },
  updated_by: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '最后更新',
  },
  deleted_by: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '最后删除',
  },
})

//Vendor.sync({ force: true })

module.exports = Vendor
