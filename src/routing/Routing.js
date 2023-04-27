import React from 'react'
import {Routes, Route, } from 'react-router-dom'
import Home from '../components/home/Home'
import ProductDetails from '../components/products/ProductDetails'
import WishList from '../components/wishlist/Wishlist.js'
import Cart from '../components/cart/Cart'

function Routing() {
  return (
    <>
    <Routes>
    
        <Route path="/" element={<Home />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails/>} ></Route>
        <Route path='/productdetails/:id' element={<ProductDetails/>} ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        
    </Routes>
    </>
  )
}

export default Routing