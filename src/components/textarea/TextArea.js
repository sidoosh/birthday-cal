import React, { useState } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormHelperText from "@material-ui/core/FormHelperText";

function TextArea(props) {
  const [users, setUsers] = useState(props.data);
  const [userDataErr, setUserDataErr] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setUsers(value);
  };

  const handleInputBlur = (e) => {
    let { value } = e.target;

    try {
      let tmp = JSON.parse(value);
      if (!tmp || !Array.isArray(tmp) || tmp.length <= 0)
        throw new Error(`Couldn't find array`);

      setUserDataErr(false);
      props.setData({ users: value });
    } catch (e) {
      setUserDataErr(true);
      console.error("Error while parsing data", e);
      return;
    }
  };
  //[{"name": "Naina", "birthday": "1992-09-04"}, {"name": "Dhanwani","birthday": "1990-09-04"}]
  return (
    <div>
      {userDataErr && (
        <FormHelperText error id="error">
          Please add valid json{" "}
        </FormHelperText>
      )}
      <TextareaAutosize
        rowsMin={10}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        placeholder="Please add JSON to calculate Birthdays"
        value={
          users && typeof users === "object" ? JSON.stringify(users) : users
        }
        spellCheck={false}
        style={{
          width: "100%",
        }}
      />
    </div>
  );
}

export default TextArea;
