/**
 * @author leeming
 * @data 2019/8/15 下午7:19:47
 * @description interface
 */

const uuidv1 = require('uuid/v1');
const course_col = require('../models/course.js')

// 发布课程
const publishCourse = async (ctx, next) => {
    const uuid = uuidv1()
    let req = ctx.request.body
    console.log(req)
    ctx.status = 200

    if( !req.publisher || !req.courseTime || !req.coursePlace ){
        ctx.body = {
            code: 0,
            msg: 'less required params'
        }
        return
    }
    req.id = uuid
    const result = await course_col.create(req)

    if(result) {
        ctx.body = {
            code: 1,
            msg: 'publish success!'
        }
    }else {
        ctx.body = {
            code: 0,
            msg: 'publish failed'
        }
    }
}

// 获取所有课程
const getCourse = async(ctx, next) => {
    const req = ctx.request.body

    const cousres = await course_col.find({
        status: req.status
    })

    if(cousres) {
        ctx.status = 200
        ctx.body = {
            code: 1,
            data: cousres
        }
    }else {
        ctx.status = 400,
        ctx.body = {
            code: 0,
            msg: 'params error'
        }
    }
}


module.exports = {
    publishCourse,
    getCourse
}