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


// const navigate= useNavigate()

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
    
        <Route path="/" element={<Home />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails/>} ></Route>
        <Route path="/cart" element={ <PrivateRoute loggedin={authenticated}><Cart /> </PrivateRoute>}></Route>
        <Route path='/categories' element={<Categories />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>


        {/* <Route path='/watchlist' element={
      <PrivateRoute loggedin={authenticated}>
        <WatchList />
        </PrivateRoute>} /> */}
    
        
    </Routes>
    </>
  )
}

export default Routing