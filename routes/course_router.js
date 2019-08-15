/**
 * @author leeming
 * @data 2019/8/15 下午7:19:47
 * @description interface
 */

 const Router = require('koa-router')
 const router = new Router()
 const course_controller = require('../controllers/course_controller')

 router.post('/publish', course_controller.publishCourse) // 发布
 router.get('/getcourse', course_controller.getCourse) // 获取课程

 module.exports = router