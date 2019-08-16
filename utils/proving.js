/**
 * @description 解析token
 * 
 */

 const jwt = require('jsonwebtoken')
 const serect = 'token'

 module.exports = (token) => {
     if(token) {
        //  let token = tokens.split(' ')[1]
         //解析
         let decoded = jwt.decode(token, serect)
         return decoded
     }
 }