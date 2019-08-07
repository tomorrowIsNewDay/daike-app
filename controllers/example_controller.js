const Example_col = require('../models/example')

let uid = 0

const getExample = async (ctx, next) => {
    const req = ctx.request.body
    const examples = await Example_col.find()

    ctx.status = 200
    ctx.body = {
        msg: 'get data',
        data: {
            data: req,
            examples
        }
    }

}

const login = async (ctx, next) => {
    const req = ctx.request.body
    console.log(req)
}
const register = async(ctx, next) => {
    const req = ctx.request.body
    console.log(req)
    //插入新用户
    const userId = ++uid
    const newUser = await Example_col.create({
        userId,
        ...req
    })

    ctx.status = 200

    if(newUser){
        ctx.body = {
            code: 1,
            msg: '注册成功',
            data: {}
        }
    }
}

module.exports = {
    getExample,
    login,
    register
}