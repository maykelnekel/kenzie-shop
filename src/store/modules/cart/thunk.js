import { addCart, dellCart } from "./actions";

export const addCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  list.push(product);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(addCart(product));
};

export const dellCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();
  console.log("dell thunk", cart);
  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(dellCart(list));
};
