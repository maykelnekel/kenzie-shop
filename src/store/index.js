import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerProducts from "./modules/products/reducer";

const reducers = combineReducers({ product: reducerProducts });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
