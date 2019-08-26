// 洋葱模型
const rest = async(ctx, next) => {
    // 请求处理代码
    await next()
    // 响应处理代码
}

module.exports = rest