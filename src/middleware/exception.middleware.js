const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    if (error.errorCode) {
      ctx.body = {
        code: error.errorCode,
        message: error.msg,
        data: error.data,
      }
    } else {
      //对于未知的异常，采用特别处理
      console.error(error)
      const request_path = `request path: ${ctx.method} ${ctx.path}`
      console.log(request_path)

      ctx.body = {
        code: 1,
        message: '未知错误，请联系管理员',
        data: '',
      }
    }
  }
}

module.exports = catchError
