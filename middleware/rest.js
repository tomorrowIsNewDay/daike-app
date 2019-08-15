const rest = async(ctx, next) => {
    await next()
}

module.exports = rest