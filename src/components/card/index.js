import { useDispatch } from "react-redux";
import { addCartThunk, dellCartThunk } from "../../store/modules/cart/thunk";
import ButtonComponent from "../button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { AddShoppingCart, RemoveShoppingCart } from "@material-ui/icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 16,
    display: "flex",
    justifyContent: "center",
  },
  p: {
    fontSize: 15,
    color: "gray",
  },
  h6: {
    fontWeight: 600,
    fontSize: 15,
  },
});
const Cards = ({ product, inCart = false }) => {
  const { title, image, description, price, id } = product;
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h6" className={classes.h6}>
          {title}
        </Typography>
        <img style={{ width: "80px" }} src={image} alt={title}></img>
        <Typography className={classes.p} component="p">
          {description}
        </Typography>
        <Typography className={classes.h6} variant="h6">
          R$ {price}
        </Typography>
        {inCart ? (
          <div>
            <ButtonComponent
              icon={<RemoveShoppingCart />}
              color="secondary"
              onClick={() => dispatch(dellCartThunk(id))}
            />
            <ToastContainer />
          </div>
        ) : (
          <div>
            <ButtonComponent
              icon={<AddShoppingCart />}
              onClick={() => dispatch(addCartThunk(product))}
            />
            <ToastContainer />
          </div>
        )}
      </CardContent>
    </Card>
  );
};
export default Cards;
