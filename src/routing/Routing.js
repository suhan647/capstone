import React from 'react'
import {Routes, Route, Navigate, } from 'react-router-dom'
import Home from '../components/home/Home'
import ProductDetails from '../components/products/ProductDetails'
import WishList from '../components/wishlist/Wishlist.js'
import Cart from '../components/cart/Cart'
import Categories from '../components/categories/Categories'
import Register from '../auth/Register'
import Login from '../auth/Login'
import { useSelector } from 'react-redux'
import Preference from '../components/preferences/Preference'
import Order from '../components/orderPage/Order'



function PrivateRoute({loggedin, children}){
  if(loggedin){
    return children
  }else{
    return <Navigate to='/login' />
  }
}


function Routing() {

  const authenticated = useSelector((state) => state.authentication.user)
  return (
    <>
    <Routes>
    
        <Route index path="/" element={<Home />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails/>} ></Route>
        <Route path="/cart" element={ <PrivateRoute loggedin={authenticated}><Cart /> </PrivateRoute>}></Route>
        <Route path='/categories/:name' element={<Categories />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/preference' element={<PrivateRoute loggedin={authenticated}><Preference /></PrivateRoute>}></Route>
        <Route path='/preference/:categoryname' element={<Preference />}></Route>
        <Route path='/order' element={<Order/>}></Route>
        
    </Routes>
    </>
  )
}

export default Routing