/**
 * @author leeming
 * @description 用户user
 */
const Router = require('koa-router')
const router = new Router()

const user_controller = require('../controllers/user_controller')

router.post('/login', user_controller.login)
router.post('/register', user_controller.register)
router.post('/user/update',user_controller.user_update)

module.exports = router