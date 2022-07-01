const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    id:{type:String, required:true},
    userId:{type:String, required:true},
    items:[],
    total:{type:String, required:true},
})

module.exports = mongoose.model('order',UserSchema)