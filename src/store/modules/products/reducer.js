import { ADD_PRODUCTS } from "./actionTypes";
import { kenzieShopProducts } from "../../../services";

const reducerProducts = (state = kenzieShopProducts, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      const { products } = action;
      return [...state, products];

    default:
      return state;
  }
};
export default reducerProducts;
