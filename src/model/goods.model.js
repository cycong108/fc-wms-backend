const { DataTypes } = require('sequelize')
const seq = require('../utils/seq')

const GoodsType = require('./goods_type.model')
const Place = require('./place.model')
const Vendor = require('./vendor.model')

const Goods = seq.define('m_goods', {
  spec: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '型号',
  },
  goods_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '物料种类ID',
  },
  place_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '存放位置ID',
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '品牌',
  },
  default_vendor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '默认供应商ID',
  },
  parameters: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '参数规格',
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '单位',
    defaultValue: 'pcs',
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    comment: '单价',
    defaultValue: 0,
  },
  default_qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '默认数量',
    defaultValue: 0,
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

//Goods.sync({ force: true })

Goods.belongsTo(GoodsType, {
  foreignKey: 'goods_type_id',
  as: 'goods_type_info',
})

Goods.belongsTo(Place, {
  foreignKey: 'place_id',
  as: 'place_info',
})

Goods.belongsTo(Vendor, {
  foreignKey: 'default_vendor_id',
  as: 'default_vendor_info',
})

module.exports = { Goods, GoodsType, Place, Vendor }
