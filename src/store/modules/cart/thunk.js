import { toast } from "react-toastify";
import { addCart, dellCart } from "./actions";

export const addCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  list.push(product);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(addCart(product));
  toast.success("Produto adicionado ao carrinho!");
};

export const dellCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();
  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(dellCart(list));
  toast.warn("Produto retirado do carrinho!");
};
