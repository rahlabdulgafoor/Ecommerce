// import model wishlists
const wishlists= require('../models/wishlistSchema')

// logic to add product to wishlists
exports.addtowishlist=async (req,res)=>{
    // get product details from req to add
    const {id,title,price,image}=req.body
    try{
        // check product is in wishlist model 
        const product=await wishlists.findOne({id})
        if(product){
            res.status(406).json("Product already exist in your wishlists")
        }
        else{
            // if no then add product to model
            const newProduct= new wishlists({
                id,title,price,image
            })
            // save mongodb
            await newProduct.save()
            res.status(200).json(newProduct)
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}
// getwishlist get all products from wishlist
exports.getallProducts=async (req,res)=>{
    try{
        const allproducts= await wishlists.find()
        res.status(200).json(allproducts)

    }
    catch(error){
        res.status(401).json(error)
    }
}

// logic to remove from wisjlist
exports.removeItem= async (req,res)=>{
    // get
    const {id}=req.params
    // remove id from mongodb collection
    try{
        await wishlists.deleteOne({id})
        const allItems = await wishlists.find()
        res.status(200).json("Item removed successfully!!!")

    }
    catch(error){
        res.status(401).json(error)
    }
}
exports.getwishlist=wishlists