const Router = require('koa-router')

const { auth, isAdmin } = require('../middleware/auth.middleware')
const { validEditPlace } = require('../middleware/validator.middleware')

const { create, update, remove, find } = require('../service/place.service')

const router = new Router({ prefix: '/place' })

router.post('/', auth, isAdmin, validEditPlace, create)

router.put('/:id', auth, isAdmin, validEditPlace, update)

router.delete('/:id', auth, isAdmin, remove)

router.get('/', find)

module.exports = router
