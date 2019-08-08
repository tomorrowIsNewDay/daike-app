/**
 * @author leeming
 * @description 学校
 */
const Router = require('koa-router')
const router = new Router()

const school_controller = require('../controllers/school_controller')

router.get('/school', school_controller.getSchoolByName)
router.get('/insertschool', school_controller.insertSchoolByName)

module.exports = router