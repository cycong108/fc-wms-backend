const auth = async (ctx, next) => {
    const user = {
        user_code: 'visitor',
        user_name: 'visitor',
        is_admin: true
    }
    ctx.state.user = user

    await next()
}

const isAdmin = async (ctx, next) => {
    const { is_admin } = ctx.state.user
    if (!is_admin) {
        console.error('该用户没有权限。', ctx.state.user)
        return
    }

    await next()
}

module.exports = {
    auth,
    isAdmin
}