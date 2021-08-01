import clsx from "clsx";
import {
  AppBar,
  Button,
  Drawer,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CloseIcon from "@material-ui/icons/Close";
import Products from "../../components/products";
import Cart from "../../components/cart";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  openCart: {
    maxWidth: drawerWidth,
    backgroundColor: "#a1a2a",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  buttonBuy: {
    background: "#257F25",
    color: "white",
    position: "fixed",
    bottom: 0,
    width: drawerWidth,
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function Home() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(open);
  return (
    <Grid>
      <AppBar position="fixed">
        <Toolbar className={classes.toolBar}>
          <Typography component="h1">Kenzie Shop</Typography>
          <IconButton
            color="inherit"
            aria-label="Abrir Carrinho de compras"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
        <Products />
      </main>
      <Drawer
        className={classes.openCart}
        color="inherit"
        variant="persistent"
        anchor="right"
        open={open}
      >
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon color="secondary" />
        </IconButton>
        <Cart />
        <Button
          position="fixed"
          variant="contained"
          className={classes.buttonBuy}
        >
          Finalizar Compra
        </Button>
      </Drawer>
    </Grid>
  );
}

export default Home;
