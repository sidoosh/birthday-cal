import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const Input = (props) => {
  const classes = useStyles();
  const [year, setYear] = useState(props.data);
  const [yearInputErr, setYearErr] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setYear(value);
  };
  const handleInputBlur = (e) => {
    const { value } = e.target;
    if (isNaN(value) || value.length !== 4) {
      setYearErr(true);
      return;
    }

    setYearErr(false);
    props.setData({ year: value });
  };

  return (
    <div className={classes.root}>
      <TextField
        error={yearInputErr}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        label="Year"
        value={year}
        helperText={
          yearInputErr ? <span id="error">Please valid year</span> : ""
        }
        placeholder="Please add year"
        variant="outlined"
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default Input;
