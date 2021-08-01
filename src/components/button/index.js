import { Grid, IconButton, makeStyles } from "@material-ui/core";

const ButtonComponent = ({ icon, color = "primary", onClick, type = "" }) => {
  return (
    <Grid container direction="row" justifyContent="flex-end">
      <IconButton
        // className={classes.fab}
        size="medium"
        color={color}
        type={type}
        onClick={() => onClick()}
      >
        {icon}
      </IconButton>
    </Grid>
  );
};
export default ButtonComponent;
