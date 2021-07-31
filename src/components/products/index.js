import Card from "../card";
import { useSelector } from "react-redux";

const Products = () => {
  const { products } = useSelector((store) => store);
  console.log(products);
  return (
    <div>
      {products.map((product, index) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Products;
