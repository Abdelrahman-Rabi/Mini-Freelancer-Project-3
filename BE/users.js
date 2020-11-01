const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    userName : {type:String, required:true, unique:true},
    email : {type:String, required:true, unique:true},
    password : {type:String, required:true},
    phoneNumber: { type: Number, required: true }
})

module.exports = mongoose.model('User', userschema)