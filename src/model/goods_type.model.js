const { DataTypes } = require('sequelize')
const seq = require('../utils/seq')

const GoodsType = seq.define('m_goods_type', {
  goods_type_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '物料种类',
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

//GoodsType.sync({ force: true })

module.exports = GoodsType
