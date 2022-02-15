import { createSlice } from "@reduxjs/toolkit";

export const createCardReducer = createSlice({
  name: "createcards",
  initialState: { data: {} },
  reducers: {
    add_Property: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});
export default createCardReducer.reducer;
export const { add_Property } = createCardReducer.actions;
