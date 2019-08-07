/**
 * @author leeming
 * @description user model
 */

 const mongoose = require('mongoose')

 const Schema = mongoose.Schema
 const UserModel = new Schema({
     userId: {
         type: String,
         unique: true,
         required: true
     },
     account: {
         type: String
     },
     userName: {
         type: String
     },
     email: {
         type: String
     },
     phone: {
         type: String
     },
     headerImg: {
        type: String
    },
    studentId: {
        type: String
    },
    school: {
        type: String
    },
    schoolId: {
        type: String
    },
    provinceId: {
        type: Number
    },
    major: {
        type: String
    },
    college: {
        type: String
    },
    wechat: {
        type: String
    },
    qq: {
        type: String
    },
    collections: {
        type: Array
    } 
 },{
    collection: 'user', // 这里是为了避免新建的表会带上s后缀
    versionKey: false // 不需要__v字段，默认是加上的
})

module.exports = mongoose.model('user', UserModel)