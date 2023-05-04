import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    preferenceData: [],
  }

  export const PreferenceSLice = createSlice({
    name: 'preference',
    initialState,
    reducers: {
      selectedpreferences: (state, action) => {
        state.preferenceData = action.payload;
      },
    },
  });
  
  export const { selectedpreferences } = PreferenceSLice.actions;
  export default PreferenceSLice.reducer
  