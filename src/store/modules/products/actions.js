import { ADD_PRODUCTS } from "./actionTypes";

const addProducts = (product) => ({
  type: ADD_PRODUCTS,
  product,
});
export default addProducts;
