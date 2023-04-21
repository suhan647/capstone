import { configureStore } from '@reduxjs/toolkit'
import   productSlice  from './slices/ProductSlice'
import CartSlice from './slices/CartSlice'
import  wishSlice  from './slices/WishlistSlice'

export const store = configureStore({
  reducer: {
    productsList: productSlice,
    CartSlice: CartSlice,
    wishListSlice : wishSlice
  }, 
})