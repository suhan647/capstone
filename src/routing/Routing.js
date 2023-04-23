import React from 'react'
import {Routes, Route, } from 'react-router-dom'
import Home from '../components/home/Home'
import ElectronicProducts from '../components/products/ElectronicProducts'
import MensProducts from '../components/products/MensProducts'
import ProductDetails from '../components/products/ProductDetails'
import WomensProducts from '../components/products/WomensProducts'


function Routing() {
  return (
    <>
    <Routes>
    
        <Route path="/" element={<Home />}></Route>
        <Route path="/mensproducts" element={<MensProducts />}></Route>
        <Route path="/womensproducts" element={<WomensProducts />}></Route>
        <Route path="/electronicproducts" element={<ElectronicProducts />}></Route>
        <Route path='/productdetails/:id' element={<ProductDetails/>} ></Route>
        
    </Routes>
    
    </>
  )
}

export default Routing