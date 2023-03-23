import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterWord: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterWord: (state, action) => {
      state.filterWord = action.payload;
    },
  },
});

export const { setFilterWord } = filterSlice.actions;

export default filterSlice.reducer;
