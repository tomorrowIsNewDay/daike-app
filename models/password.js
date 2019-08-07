/**
 * @author leeming
 * @description pwd collection
 */

 const mongoose = require('mongoose')

 const Schema = mongoose.Schema
 const PassWordModel = new Schema({
     userId: {
         type: String,
         unique: true,
         required: true
     },
     hash: {
         type: String,
         required: true
     }
 }, {collection: 'password', versionKey: false})

 module.exports = mongoose.model('password', PassWordModel)