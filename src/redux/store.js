import { configureStore } from '@reduxjs/toolkit'
import   productSlice  from './slices/ProductSlice'
import CartSlice from './slices/CartSlice'
import  wishSlice  from './slices/WishlistSlice'
import { reducer as authenticationReducer } from './slices/AuthSlice';
import  PreferenceSLice  from './slices/PreferenceSlice';

export const store = configureStore({
  reducer: {
    productsList: productSlice,
    CartSlice: CartSlice,
    wishListSlice : wishSlice,
    authentication : authenticationReducer,
    preference : PreferenceSLice
  }, 
})