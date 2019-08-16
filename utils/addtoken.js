const jwt = require('jsonwebtoken')

const serect = 'token' //秘要，不能丢

// 创建token
module.exports = (userinfo) => {
    const token = jwt.sign({
        user: userinfo.user,
        id: userinfo.id
    }, serect, {expiresIn: '1h'})

    return token
}