import { createSlice } from "@reduxjs/toolkit";

const initState = {
  userData: null,
 // cardsData: null,
 // categoriesData: null,
  loginState: false,
};
export const loginReducer = createSlice({
  name: 'login',
  initialState: initState,
  reducers: {
    set_login (state, action) {
      state.loginState = action.payload;
    },
    set_userData (state, action) {
      state.userData = action.payload;
    },
  }

})

export default loginReducer.reducer;
export const {set_login, set_userData} = loginReducer.actions;