import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    background: "#f6db2a",
    color: "#000",
    fontWeight: "bold",
  },
}));

function CustomButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        onClick={props.changeHandler}
        className={classes.button}
      >
        Find Birth Days
      </Button>
    </div>
  );
}

export default CustomButton;
