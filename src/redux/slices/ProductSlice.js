import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productItems(state, action) {
        state.products=action.payload
    },
  },
})


export const { productItems } = productSlice.actions

export default productSlice.reducer