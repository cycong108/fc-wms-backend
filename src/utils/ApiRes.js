class ApiRes {
  static succ(message = '操作成功', data) {
    return {
      code: 0,
      message,
      data,
    }
  }

  static succData(data) {
    return {
      code: 0,
      message: '操作成功',
      data,
    }
  }

  static fail(message = '操作失败', data) {
    return {
      code: 1,
      message,
      data,
    }
  }

  static failData(data) {
    return {
      code: 1,
      message: '操作失败',
      data,
    }
  }
}

module.exports = ApiRes
