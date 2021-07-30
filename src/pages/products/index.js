import store from "../../store";
import { kenzieShopApi } from "../../services";

const Products = () => {
  console.log(kenzieShopApi);
  console.log("products page", store);
  return <div></div>;
};
export default Products;
