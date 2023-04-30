import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
//   quantity:{}
}

export const wishSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
     addToWishList : (state,action) => {
        let existingItem = state.list.find(product => product.id !== action.payload)
        if(!existingItem){
         // state.quantity[action.payload.id]++
         state.list.push(action.payload)
        }
        else{
         console.log("Item Already present in wishlist");
        }

     },
     removeFromWishList : (state, action) => {
        state.list = state.list.filter((item) => item.id !== action.payload)
      //   delete state.quantity[action.payload.id]
     }
  },
})

export const { addToWishList, removeFromWishList} = wishSlice.actions

export default wishSlice.reducer