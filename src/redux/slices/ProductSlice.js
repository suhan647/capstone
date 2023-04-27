import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
  reuse : ''
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productItems(state, action) {
        state.products=action.payload
    },
    reusability(state, action) {
      state.reuse = action.payload
    }
  },
})


export const { productItems, reusability } = productSlice.actions

export default productSlice.reducer