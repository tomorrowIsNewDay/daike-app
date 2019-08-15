const Koa = require('koa')

const config = require('./config')

const mongoose = require('mongoose')
// const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

const example_router = require('./routes/example_routes')
const user_router = require('./routes/user_routes') // 用户
const school_router = require('./routes/school_routes') //学校
const course_router = require('./routes/course_router') // 课程

mongoose.connect(config.db, {useNewUrlParser: true}, err=> {
    if(err) {
        console.error('Failed to connect to database')
    } else {
        console.info('Connection database successfully')
    }
})
app.use(bodyParser())
// app.use(cors()) //要在router之前
app.use(example_router.routes()).use(example_router.allowedMethods())
app.use(user_router.routes()).use(user_router.allowedMethods())
app.use(school_router.routes()).use(school_router.allowedMethods())
app.use(course_router.routes()).use(course_router.allowedMethods())

app.listen(config.port)