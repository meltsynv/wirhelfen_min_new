import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from "../Redux/Reducers/rootReducer";

const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;

