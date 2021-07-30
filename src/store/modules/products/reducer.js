import { ADD_PRODUCTS } from "./actionTypes";

const reducerProducts = (state = [], action) => {
  console.log("reducer", state);
  switch (action.type) {
    case ADD_PRODUCTS:
      const { products } = action;
      return [...state, products];

    default:
      return state;
  }
};
export default reducerProducts;
