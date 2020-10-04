import React from "react";
import DayList from "../dayList";
import Input from "../input";
import TextArea from "../textarea";
import USERS_INFO from "../common/mock_data.json";
import Loader from "../loader";
import Button from "../button";
import Utils from "../common/utils";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

class Board extends React.Component {
  state = {
    users: JSON.stringify(USERS_INFO),
    prevUsers: "",
    year: "1992",
    prevYear: "",
    isLoading: false,
    parsedData: null,
  };

  componentDidMount() {
    try {
      let { users, year } = this.state;
      users = JSON.parse(users);
      this.processUserData(users, year);
    } catch (e) {
      this.setState({
        userDataErr: true,
        errMsg: e,
      });
      console.error("Error while parsing data", e);
    }
  }

  handleTextAreaChange = (e) => {
    const { value } = e.target;
    this.setState({
      users: value,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isLoading !== this.state.isLoading) return true;
    if (
      this.state.prevYear === nextState.prevYear &&
      this.state.prevUsers === nextState.prevUsers
    ) {
      return false;
    }

    return true;
  }

  //[{"name":"Keefe Laycock","birthday":"07/01/2035"},{"name": "Naina", "birthday": "09/04/1992"}]
  processUserData = () => {
    if (
      this.state.users === this.state.prevUsers &&
      this.state.year === this.state.prevYear
    ) {
      this.setState({
        isLoading: false,
      });

      console.log("No Input changed");
      return;
    }
    let { users, year } = this.state;
    try {
      if (!users || users.length <= 0 || !year)
        throw new Error("Missing Fields");
      let usr = JSON.parse(users);
      const data = Utils.processData(usr, year);
      console.log(data);
      this.setState({
        isLoading: false,
        parsedData: data,
        prevUsers: users,
        prevYear: year,
      });
    } catch (e) {
      this.setState({
        userDataErr: true,
        errMsg: e,
        isLoading: false,
      });
      console.error("Error while parsing data", e);
    }
  };

  setInputData = (data) => {
    this.setState(data);
  };

  handleButtonClick = (e) => {
    const err = document.querySelector("#error");
    if (err) return;
    this.setState({ isLoading: true }, () => this.processUserData());
  };

  render() {
    if (this.state.isLoading) return <Loader />;

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card className={classes.rootLeft}>
          <div className={classes.inputContainer}>
            <Input setData={this.setInputData} data={this.state.year} />
            <Button
              changeHandler={this.handleButtonClick}
              className={classes.button}
            />
          </div>
          <TextArea setData={this.setInputData} data={this.state.users} />
        </Card>
        <div className={classes.rootRight}>
          <Card>
            <DayList
              data={this.state.parsedData}
              prevUsersData={this.state.prevUsers}
            />
          </Card>
        </div>
      </div>
    );
  }
}
const styles = {
  root: {
    display: "flex",
    marginTop: 10,
    justifyContent: "space-between",
  },
  rootLeft: {
    display: "flex",
    width: "30%",
    flexDirection: "column",
    padding: 30,
  },
  rootRight: {
    display: "flex",
    width: "65%",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
  },
};
export default withStyles(styles)(Board);
