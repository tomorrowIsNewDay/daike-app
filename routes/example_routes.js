const Router = require('koa-router')
const router = new Router()

const example_controller = require('../controllers/example_controller')

router.get('/example/get', example_controller.getExample)
router.post('/example/login', example_controller.login)
router.post('/example/register', example_controller.register)

module.exports = router