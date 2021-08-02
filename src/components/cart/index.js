import { Grid, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import Cards from "../card";
const useStyle = makeStyles({
  container: {
    width: 300,
  },
});
const Cart = () => {
  const classes = useStyle();
  const cart = useSelector((store) => store.cart);
  return (
    <Grid container justifyContent="center" className={classes.container}>
      {cart.map((product, index) => (
        <Cards key={index} product={product} inCart={true} />
      ))}
    </Grid>
  );
};
export default Cart;
