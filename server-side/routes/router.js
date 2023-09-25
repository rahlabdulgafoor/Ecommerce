// import express
const express = require('express')
// import product controller
const productController=require('../controller/productController')
const wishlistController=require('../controller/wishlistController')
const cartController=require('../controller/cartController')
// to create route using express
const router = new express.Router()

// route for getallproducts
router.get('/products/get-all-products',productController.getallproducts)

// route for viewproducts
router.get('/products/view/:id',productController.viewproduct)

// router.post
router.post('/wishlist/add-product' ,wishlistController.addtowishlist)

// get wishlist
router.get('/wishlist/all-products',wishlistController.getallProducts)

// route for removing an item from wishlists
router.delete('/wishlist/remove-item/:id',wishlistController.removeItem)

// add cart item
router.post('/cart/add-product',cartController.addToCart)

// get cart item

// 
// export router
module.exports=router