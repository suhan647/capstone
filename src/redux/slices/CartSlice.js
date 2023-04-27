import { createSlice } from '@reduxjs/toolkit';
import { removeFromWishList } from './WishlistSlice';

const initialState = {
  items: [],
  quantities: {},
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.quantities[action.payload.id] = 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      delete state.quantities[action.payload.id];
    },
    increaseQuantity: (state, action) => {
      state.quantities[action.payload.id]++;
    },
    decreaseQuantity: (state, action) => {
      state.quantities[action.payload.id]--;
    },
    resetCart: state => {
      return initialState;
    },
  },
});

export const addToCart = (item) => (dispatch) => {
  dispatch(cartSlice.actions.addItem(item));
};

export const moveItemToCart = (item) => (dispatch) => {
  dispatch(addToCart(item));
  dispatch(removeFromWishList(item.id));
};

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
