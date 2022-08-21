const Router = require('koa-router')

const { auth, isAdmin } = require('../middleware/auth.middleware')
const { validEditGoodsState } = require('../middleware/validator.middleware')

const { create, update, remove, find } = require('../service/goods_state.service')

const router = new Router({ prefix: '/api/goods_state' })

router.post('/', auth, isAdmin, validEditGoodsState, create)

router.put('/:id', auth, isAdmin, validEditGoodsState, update)

router.delete('/:id', auth, isAdmin, remove)

router.get('/', find)

module.exports = router
