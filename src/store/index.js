import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerProducts from "./modules/products/reducer";

const reducers = combineReducers({ products: reducerProducts });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
