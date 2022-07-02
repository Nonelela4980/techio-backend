const mongoose = require('mongoose')
const {MONGO_URI} = require('../constants/configs')


const connect = () => mongoose.connect(MONGO_URI,()=>{
    console.log('mongo connection successful...')
})

module.exports = connect