const mongoose = require('mongoose')
const Product = require('../models/product')

const getProducts = async (req,res) => {
    const products = await Product.find();

    if(!products)
        res.status(400).json({'message':'no products found'})
    else
        res.status(200).json(products)
}


module.exports = {getProducts}