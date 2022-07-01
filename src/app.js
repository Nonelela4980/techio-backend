require('dotenv').config()
const express = require('express')
const app = express();
const cors= require('cors')
const corsAccess = require('./configs/cors')

const PORT = 8080

app.use(cors(corsAccess))

app.use('/authorization',require('./routes/auth'))


app.listen(PORT,()=>{
    console.log(`server is listeng to ${PORT}...`)
})