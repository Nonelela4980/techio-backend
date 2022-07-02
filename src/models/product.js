const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    id:{type:String, required:true},
    title:{type:String, required:true},
    description:{type:String, required:true},
    category:{type:String, required:true},
    price:{type:Number, required:true},
    imageUrl:{type:String, required:true},
})

module.exports = mongoose.model('product',ProductSchema)