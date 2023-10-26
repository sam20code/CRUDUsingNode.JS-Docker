const mongoose = require('mongoose')

 const userSchema = new mongoose.Schema({
    firstName: String,
    lastName : String,
    mail : String,
 })


 module.exports = mongoose.model('user',userSchema)