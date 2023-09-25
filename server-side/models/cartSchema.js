// import mongoose
const mongoose= require("mongoose")

// define schema to store data in collection/model
 const cartSchema=mongoose.Schema({
    id: {
        type:Number,
        required:true,
        unique:true
    },
    title: {
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
    image: {
        type:String,
        required:true,
    },
    quantity: {
        type:Number,
        required:true,
    },
    total: {
        type:Number,
        required:true,
    }

});
const carts=mongoose.model("carts",cartSchema)

module.exports=carts