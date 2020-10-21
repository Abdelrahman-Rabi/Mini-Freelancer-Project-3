const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    fName : {type:String, required:true, unique:true},
    languages : {type:String, required:true},
    skills : {type:String, required:true},
    payments : { type: String, required: true }
})

module.exports = mongoose.model('Post', postSchema)