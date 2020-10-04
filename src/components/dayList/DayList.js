import React from "react";
import DayItem from "../dayItem";
import { makeStyles } from "@material-ui/core/styles";
import Constants from "../common/constants";

const DayList = (props) => {
  const classes = useStyles();

  if (
    !props.data ||
    (props && props.data && Array.isArray(props.data)) ||
    typeof props.data !== "object"
  ) {
    return <div>No birthdays</div>;
  }

  //   let keys = Object.keys(props.data);
  let dayList = Object.keys(Constants.DAYS);
  return (
    <div className={classes.root}>
      {props &&
        props.data &&
        dayList.map((item, index) => (
          <div key={index} className={classes.cardWrapper}>
            <div className={classes.header}>
              {item}{" "}
              <span className={classes.subHeader}>
                (
                {props.data[item] && props.data[item].length
                  ? `${props.data[item].length} birthdays`
                  : `0 birthday`}
                )
              </span>
            </div>
            <div className={classes.itemWrapper}>
              {/* <div></div> */}
              <DayItem data={props.data[item]} title={item} />
            </div>
          </div>
        ))}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  itemWrapper: {
    display: "flex",
  },
  header: {
    background: "#f6db2a",
    padding: "5px 20px",
    fontWeight: "bold",
  },
  cardWrapper: {
    width: "100%",
    height: "100%",
    background: "#f5efd3",
  },
  subHeader: {
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: "12px",
  },
}));
export default DayList;
