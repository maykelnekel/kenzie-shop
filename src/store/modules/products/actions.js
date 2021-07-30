import { ADD_PRODUCTS } from "./actionTypes";

const addProducts = (products) => ({
  type: ADD_PRODUCTS,
  products: products,
});
export default addProducts;
