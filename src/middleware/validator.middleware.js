const { Err } = require('../utils/Errors')

const validEditGoodsType = async (ctx, next) => {
  try {
    ctx.verifyParams({
      goods_type_name: { type: 'string', required: true },
    })
  } catch (err) {
    throw new Err('物料种类的参数不正确', ctx.request.body)
  }

  await next()
}

const validEditGoodsState = async (ctx, next) => {
  try {
    ctx.verifyParams({
      goods_state_name: { type: 'string', required: true },
    })
  } catch (err) {
    throw new Err('物料状态的参数不正确', ctx.request.body)
  }

  await next()
}

const validEditPlace = async (ctx, next) => {
  try {
    ctx.verifyParams({
      place_name: { type: 'string', required: true },
    })
  } catch (err) {
    throw new Err('存放位置的参数不正确', ctx.request.body)
  }

  await next()
}

const validEditVendor = async (ctx, next) => {
  try {
    ctx.verifyParams({
      vendor_name: { type: 'string', required: true },
    })
  } catch (err) {
    throw new Err('供应商的参数不正确', ctx.request.body)
  }

  await next()
}

const validEditGoods = async (ctx, next) => {
  try {
    ctx.verifyParams({
      spec: { type: 'string', required: true },
      goods_type_id: { type: 'int', required: true },
      place_id: { type: 'int', require: true },
      brand: { type: 'string', require: false },
      default_vendor_id: { type: 'int', require: true },
      parameters: { type: 'string', require: false },
      unit: { type: 'string', require: false },
      price: { type: 'number', require: false },
      default_qty: { type: 'int', require: false },
    })
  } catch (err) {
    throw new Err('物料的参数不正确', ctx.request.body)
  }

  await next()
}

module.exports = {
  validEditGoodsType,
  validEditGoodsState,
  validEditPlace,
  validEditVendor,
  validEditGoods,
}
