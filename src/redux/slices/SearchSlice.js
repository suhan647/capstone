import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchData: [],
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchproducts: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { searchproducts } = searchSlice.actions;

export default searchSlice.reducer;
