import { ADD_CART, DELL_CART } from "./actionTypes";

export const addCart = (product) => ({
  type: ADD_CART,
  product,
});

export const dellCart = (list) => ({
  type: DELL_CART,
  list,
});
