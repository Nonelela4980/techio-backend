require('dotenv').config()
const express = require('express')
const app = express();
const path=require('path');
const cors= require('cors')
const corsAccess = require('./configs/cors')
const connect = require('./configs/connectDB')

const PORT = 8080

app.use(cors(corsAccess))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'/public')))

connect();
app.use('/auth',require('./routes/auth'))
app.use('/products',require('./routes/products'))


app.listen(PORT,()=>{
    console.log(`server is listeng to ${PORT}...`)
})

