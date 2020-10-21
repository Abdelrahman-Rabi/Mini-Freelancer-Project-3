const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    firstName : {type:String, required:true, unique:true},
    secondName : {type:String, required:true},
    email : {type:String, required:true, unique:true},
    password : {type:String, required:true},
    phoneNumber: { type: Number, required: true }
})

module.exports = mongoose.model('User', userschema)