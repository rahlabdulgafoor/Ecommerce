// loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
// import db
require('./db/connection')
// import router
const router=require('./routes/router')
// create express server
const server=express()

// use packages to server
server.use(cors())
server.use(express.json())
server.use(router)

// create port where server should listen
const PORT=process.env.PORT || 3000

// run server
server.listen(PORT,()=>{
    console.log(`E cart Server started at port ${PORT}`);
})

// resolve get req to localhost:3000
server.get('/',(req,res)=>{
    res.status(200).json("E cart server started")
})