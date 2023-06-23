import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'under Construction',
};

const categories = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default categories.reducer;
export const { setStatus } = categories.actions;
