import addProducts from "./actions";
import { kenzieShopApi } from "../../../services";
import axios from "axios";
console.log(kenzieShopApi);
export const addProductsThunk = () => (dispatch) => {
  axios
    .get(kenzieShopApi)
    .then((response) => dispatch(addProducts(response.data)))
    .catch((err) => console.log(err));
};
