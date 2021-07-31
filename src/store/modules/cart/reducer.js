import { ADD_CART, DELL_CART } from "./actionTypes";

const reducerCart = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];

    case DELL_CART:
      const { list } = action;
      return list;

    default:
      return state;
  }
};
export default reducerCart;
