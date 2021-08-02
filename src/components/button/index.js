import { Grid, IconButton } from "@material-ui/core";

const ButtonComponent = ({ icon, color = "primary", onClick, type = "" }) => {
  return (
    <Grid container direction="row" justifyContent="flex-end">
      <IconButton
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
