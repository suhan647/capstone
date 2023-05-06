import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orderlist: [],
}

export const OrderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
     addtoOrders : (state,action) => {
        state.orderlist = state.orderlist.concat(action.payload)
     },
     resetOrder: state => {
        return initialState;
      },
  },
})

export const { addtoOrders,resetOrder} = OrderSlice.actions

export default OrderSlice.reducer