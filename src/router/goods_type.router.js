const Router = require('koa-router')

const { auth, isAdmin } = require('../middleware/auth.middleware')
const { validEditGoodsType } = require('../middleware/validator.middleware')

const { create, update, remove, find } = require('../service/goods_type.service')

const router = new Router({ prefix: '/goods_type' })

router.post('/', auth, isAdmin, validEditGoodsType, create)

router.put('/:id', auth, isAdmin, validEditGoodsType, update)

router.delete('/:id', auth, isAdmin, remove)

router.get('/', find)

module.exports = router
