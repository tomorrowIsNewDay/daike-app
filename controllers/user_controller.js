/**
 * @author leeming
 * @description user controller
 */

const user_model = require('../models/user.js')
const pwd_model = require('../models/password.js')
const pwdfn = require('../utils/pwd')

const uuidv1 = require('uuid/v1')

const login = async(ctx, next) => {
    const req = ctx.request.body

    // 从库中找用户信息
    const user = await user_model.findOne({
        account: req.account
    })
    if(!user){
        ctx.status = 200
        ctx.body = {
            code: 0,
            msg: 'account or password error!'
        }
       return 
    }
    const userId = user.userId

    // 从密码库中找hash
    const pass = await pwd_model.findOne({
        userId
    },{
        hash: 1
    })
    // console.log(pass)
    const match = await pwdfn.validate(req.password, pass.hash)
    if(match){
        ctx.body = {
            code: 1,
            msg: 'login success',
            data: user
        }
    } else {
        ctx.body = {
            code: 0,
            msg: 'login faluid'
        }
    }
}

// 注册
 const register = async(ctx, next) => {
     const req = ctx.request.body

     const user = await user_model.findOne({
         account: req.account
     })

     ctx.status = 200
     if(user) {
         ctx.body = {
             code: 0,
             msg: '用户名重复'
         }
         return
     }
     // 插入新用户
     const userId = uuidv1()
     let newUser = await user_model.create({
         userId: userId.toString(),
         account: req.account
     })

     if(newUser) {
         // 加密
         const hash = await pwdfn.encrypt(req.password, 3)
         const result = await pwd_model.create({
             userId,
             hash
         })
         if(result) {
             ctx.body = {
                 code: 1,
                 msg: '注册成功',
                 data: {
                     userId: newUser.userId,
                     account: newUser.account
                 }
             }
         }
     }
 }

 // 更新
 const user_update = async(ctx, next) => {
    const req = ctx.request.body
    // 获取用户的 userId
    const result = await user_model.updateOne({
        userId: req.userId
    }, req)
    ctx.status = 200
    if(result.nModified == 1) {
        ctx.body = {
            code: 1,
            msg: 'save successed!'
        }
    }else{
        ctx.body = {
            code: 0,
            msg: 'save failed'
        }
    }
 }

 module.exports = {
     login,
     register,
     user_update
 }