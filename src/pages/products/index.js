import { useSelector } from "react-redux";
import Button from "../../components/button";
import Card from "../../components/card";

const Products = () => {
  const { products } = useSelector((state) => state);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Card
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
          />
          <Button
            onclick={() => console.log(product)}
            content="Adicionar ao carrinho"
          />
        </div>
      ))}
    </div>
  );
};
export default Products;
