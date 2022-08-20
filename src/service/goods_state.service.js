const ApiRes = require('../utils/ApiRes')
const { Err } = require('../utils/Errors')

const { GoodsStateDao } = require('../dao/goods_state.dao')

class GoodsStateService {
  async create(ctx) {
    let model = ctx.request.body
    let { user_code } = ctx.state.user
    model.created_by = user_code
    model.updated_by = user_code

    const res = await GoodsStateDao.create(model)
    if (res) {
      ctx.body = ApiRes.succ('添加成功', res)
    } else {
      throw new Err('添加失败')
    }
  }

  async update(ctx) {
    let model = ctx.request.body
    model.id = ctx.params.id
    let { user_code } = ctx.state.user
    model.updated_by = user_code

    const res = await GoodsStateDao.update(ctx.params.id, model)
    if (res) {
      ctx.body = ApiRes.succ('修改成功')
    } else {
      throw new Err('修改失败')
    }
  }

  async remove(ctx) {
    const res = await GoodsStateDao.remove(ctx.params.id, ctx.state.user)
    if (res > 0) {
      ctx.body = ApiRes.succ('删除成功')
    } else {
      throw new Err('删除失败，可能原因：没有数据')
    }
  }

  async find(ctx) {
    const res = await GoodsStateDao.find(ctx.request.query)
    ctx.body = ApiRes.succData(res)
  }
}

module.exports = new GoodsStateService()
