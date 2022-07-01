const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    id:{type:String, required:true},
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    address:
    {
        street:String,
        town: String,
        province:String,
        zipcode:Number,
    }
})

module.exports = mongoose.model('user',UserSchema)