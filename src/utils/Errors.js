class HttpException extends Error {
  constructor(msg = '服务器异常', errorCode = 10000, code = 400) {
    super()
    this.errorCode = errorCode
    this.code = code
    this.msg = msg
  }
}

class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.errorCode = errorCode || 10000
    this.code = 400
    this.msg = msg || '参数错误'
  }
}

class NotFound extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.errorCode = errorCode || 10001
    this.code = 404
    this.msg = msg || '资源未找到'
  }
}

class AuthFailed extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.errorCode = errorCode || 10002
    this.code = 404
    this.msg = msg || '授权失败'
  }
}

class Forbidden extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.errorCode = errorCode || 10003
    this.code = 404
    this.msg = msg || '禁止访问'
  }
}

class Err extends HttpException {
  constructor(msg = '系统异常', data = '', errorCode = 1, code = 400) {
    super()
    this.errorCode = errorCode
    this.code = code
    this.msg = msg
    this.data = data
  }
}

module.exports = {
  HttpException,
  ParameterException,
  NotFound,
  AuthFailed,
  Forbidden,
  Err,
}
