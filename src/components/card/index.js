const Card = ({ name, image, description, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name}></img>
      <p>{description}</p>
      <h4>{price}</h4>
    </div>
  );
};
export default Card;
