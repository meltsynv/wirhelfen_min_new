import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducers/loginSlice";
import cardSlice from "./reducers/cardsSlice";
import categoriesSlice from "./reducers/categoriesSlice";
import createCardSlice from "./reducers/createCardSlice";

export default configureStore({
  reducer: {
    cards: cardSlice,
    categories: categoriesSlice,
    login: loginSlice,
    createcards: createCardSlice,
  },
});
