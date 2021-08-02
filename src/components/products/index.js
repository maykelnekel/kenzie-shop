import { useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";
import Cards from "../card";
const useStyle = makeStyles({
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    marginTop: 80,
  },
});
const Products = () => {
  const classes = useStyle();
  const { products } = useSelector((store) => store);
  return (
    <Grid className={classes.container} container justifyContent="center">
      {products.map((product, index) => (
        <Cards key={index} product={product} />
      ))}
    </Grid>
  );
};
export default Products;
