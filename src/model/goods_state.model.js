const { DataTypes } = require('sequelize')
const seq = require('../utils/seq')

const GoodsState = seq.define('m_goods_state', {
  goods_state_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '物料状态',
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

//GoodsState.sync({ force: true })

module.exports = GoodsState
