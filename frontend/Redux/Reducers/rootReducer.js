
const initState = {
  userData: null,
  cardsData: null,
  categoriesData: null,
  loginState: false,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        loginState: (state.loginState = action.loginState),
      };
    case "SET_USERDATA":
      return {
        ...state,
        userData: (state.userData = action.userData),
      };
    default:
      return state;
  }

};

export default rootReducer;