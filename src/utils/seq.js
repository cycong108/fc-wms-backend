const { Sequelize } = require('sequelize')

const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require('../config/env')

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  dialect: 'mysql',
  timezone: '+08:00',
  define: {
    // created_at && updated_at
    timestamps: true,
    // deleted_time
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    // 把驼峰命名转换为下划线
    underscored: true,
    scopes: {
      normal: {
        attributes: {
          exclude: ['password', 'created_by', 'created_at', 'deleted_by', 'deleted_at'],
        },
      },
    },
  },
})

// seq
//   .authenticate()
//   .then(() => {
//     console.log("数据库连接成功");
//   })
//   .catch((err) => {
//     console.log("数据库连接失败", err);
//   });

module.exports = seq
