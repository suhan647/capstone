import { configureStore } from '@reduxjs/toolkit'
import   productSlice  from './slices/ProductSlice'
import CartSlice from './slices/CartSlice'
import  wishSlice  from './slices/WishlistSlice'
// import { authSlice } from './slices/AuthSlice'
import { reducer as authenticationReducer } from './slices/AuthSlice';

export const store = configureStore({
  reducer: {
    productsList: productSlice,
    CartSlice: CartSlice,
    wishListSlice : wishSlice,
    authentication : authenticationReducer
  }, 
})