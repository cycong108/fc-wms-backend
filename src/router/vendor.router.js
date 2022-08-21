const Router = require('koa-router')

const { auth, isAdmin } = require('../middleware/auth.middleware')
const { validEditVendor } = require('../middleware/validator.middleware')

const { create, update, remove, find } = require('../service/vendor.service')

const router = new Router({ prefix: '/api/vendor' })

router.post('/', auth, isAdmin, validEditVendor, create)

router.put('/:id', auth, isAdmin, validEditVendor, update)

router.delete('/:id', auth, isAdmin, remove)

router.get('/', find)

module.exports = router
