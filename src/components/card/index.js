import { useDispatch } from "react-redux";
import { addCartThunk, dellCartThunk } from "../../store/modules/cart/thunk";
import Button from "../button";

const Card = ({ product, inCart = false }) => {
  console.log("card", product);
  const { name, image, description, price, id } = product;
  const dispatch = useDispatch();
  return (
    <div style={{ width: "150px" }}>
      <h3>{name}</h3>
      <img style={{ width: "100px" }} src={image} alt={name}></img>
      <p>{description}</p>
      <h4>{price}</h4>
      {inCart ? (
        <Button
          content={"Remover do carrinho"}
          onClick={() => dispatch(dellCartThunk(id))}
        />
      ) : (
        <Button
          content={"Adicionar ao carrinho"}
          onClick={() => dispatch(addCartThunk(product))}
        />
      )}
    </div>
  );
};
export default Card;
