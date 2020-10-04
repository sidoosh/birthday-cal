import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Utils from "../common/utils";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  card: {
    display: "grid",
    padding: 10,
    gridTemplateColumns: "repeat(22,auto)",
    // gridGap: ".5rem",
  },
  text: {
    color: "#fff",
    fontWeight: "500",
  },
});

export default function DayItem(props) {
  const classes = useStyles();
  const initials = props.data;
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        {initials && initials.length > 0 ? (
          initials.map((letter, i) => (
            <div
              key={i}
              style={{
                backgroundColor: `${Utils.colorGenerator()}`,
                padding: 10,
                display: "inline-flex",
                position: "relative",
                height: "2.5rem",
                width: "3rem",
                // fontWeight: "bold",
                // borderRadius: 4,
                // margin: 0;
                boxSizing: "border-box",
                border: "1px solid #ddd",
              }}
            >
              <span className={classes.text}>{letter}</span>
            </div>
          ))
        ) : (
          <div>No birthdays</div>
        )}
      </div>
    </div>
  );
}
