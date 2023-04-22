import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  quantity:{}
}

export const wishSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
     addToWishList : (state,action) => {
        state.list.push(action.payload);
        state.quantity[action.payload.id] = 1
     },
     removeFromWishList : (state, action) => {
        state.list = state.list.filter((item) => item.id !== action.payload)
        delete state.quantity[action.payload.id]
     }
  },
})

export const { addToWishList, removeFromWishList} = wishSlice.actions

export default wishSlice.reducer