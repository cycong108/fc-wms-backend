const { DataTypes } = require('sequelize')
const seq = require('../utils/seq')

const Place = seq.define('m_place', {
  place_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '存放位置',
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

//Place.sync({ force: true })

module.exports = Place
