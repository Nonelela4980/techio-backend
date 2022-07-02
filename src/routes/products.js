const express= require('express')
const router= express.Router();
const {getProducts} = require('../controllers/productController')

router.route('/all').get(getProducts)


module.exports = router