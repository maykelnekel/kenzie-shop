import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerProducts from "./modules/products/reducer";
import reducerCart from "./modules/cart/reducer";

const reducers = combineReducers({
  products: reducerProducts,
  cart: reducerCart,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
