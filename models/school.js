/**
 * @author leeming
 * @description school collection
 */

const mongoose = require('mongoose')

const Schema = mongoose.Schema
const SchoolModel = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    }, website: {
        type: String
    },
    provinceId: {
        type: String
    },
    level: {
        type: String
    },
    abbreviation: {
        type: String
    },
    city: {
        type: String
    },
}, { collection: 'school', versionKey: false })

module.exports = mongoose.model('school', SchoolModel)