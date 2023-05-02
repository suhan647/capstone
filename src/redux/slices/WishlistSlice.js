import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const wishSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
     addToWishList : (state,action) => {
        let existingItem = state.list.find(product => product.id === action.payload)
        if(!existingItem){
         state.list.push(action.payload)
        }
        else{
         console.log("Item Already present in wishlist");
        }

     },
     removeFromWishList : (state, action) => {
        state.list = state.list.filter((item) => item.id !== action.payload)
     }
  },
})

export const { addToWishList, removeFromWishList} = wishSlice.actions

export default wishSlice.reducer