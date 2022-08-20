const Router = require('koa-router')

const { auth, isAdmin } = require('../middleware/auth.middleware')
const { validEditGoods } = require('../middleware/validator.middleware')

const { create, update, remove, find } = require('../service/goods.service')

const router = new Router({ prefix: '/goods' })

router.post('/', auth, isAdmin, validEditGoods, create)

router.put('/:id', auth, isAdmin, validEditGoods, update)

router.delete('/:id', auth, isAdmin, remove)

router.get('/', find)

module.exports = router
