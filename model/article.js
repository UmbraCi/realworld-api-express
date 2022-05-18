const mongoose = require('mongoose');
const baseModel = require('./base-model')

const { Schema } = mongoose;

const articleSchema = new Schema({
    ...baseModel,
    "username": {
        type:String,
        required:true
    },
    "email": {
        type:String,
        required:true
    },
    "password": {
        type:String,
        required:true
    },
    "bio":  {
        type:String,
        default:null
    },
    "image": {
        type:String,
        default:null
    }
});

module.exports = articleSchema