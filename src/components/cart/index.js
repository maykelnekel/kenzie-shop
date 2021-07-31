import { useSelector } from "react-redux";
import Card from "../card";
const Cart = () => {
  const cart = useSelector((store) => store.cart);
  console.log(cart);
  return (
    <div>
      {cart.map((product) => (
        <Card key={product.id} product={product} inCart={true} />
      ))}
    </div>
  );
};
export default Cart;
