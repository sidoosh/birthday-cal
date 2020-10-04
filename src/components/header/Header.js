import React from "react";
import LoaderImg from "../../assets/loader.png";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Events Calendar
          </Typography>
          <img
            style={{ width: "auto", height: "60px" }}
            className="logo-zoom"
            alt="loader"
            src={LoaderImg}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "#f6db2a",
  },
  title: {
    flexGrow: 1,
    color: "#000",
    fontWeight: "bold",
  },
}));

export default Header;
