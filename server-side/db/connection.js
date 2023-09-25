// import mongoose
const mongoose = require('mongoose')
// get connection string
const DB= process.env.DATABASE
// connect the mongodb atlas
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Mongo db atlas connected successfully");
}).catch((error)=>{
    console.log("Mongodb connection Error"+error);
})