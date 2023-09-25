// import modeel
const carts =require('../models/cartSchema')

// logic to add item to cart
exports.addToCart=async (req,res)=>{
    const {id,title,price,image,quantity}=req.body
    try{
        // check product is in cart
        const product=await carts.findOne({id})
        if(product){
            product.quantity=+1
            product.total=product.quantity*product.price
            await product.save()
            res.status(200).json("Products added successfully..")


        }
        else{
            // if no then add product to model
            const newProduct = new carts({
                id,title,price,image,quantity,total:price*quantity
            })
            // save mongodb
            await newProduct.save()
            res.status(20).json("Product added successfully...")

        }
    }
    catch(error){

    }
}
// logic to get cart
exports.getcart=async (req,res)=>{
    try{
        const allItems = await carts.find()
        res.status(200).json(allItems)
    }
    catch{
        res.status(401).json(error)
    }
}