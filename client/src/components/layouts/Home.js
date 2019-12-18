import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import calendar from "../../images/Calendar.png";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography
          style={{
            margin: "auto",
            padding: 20
          }}
          variant="h2"
        >
          Welcome to Event Manager
        </Typography>
        <img src={calendar} alt="Calendar" />
      </React.Fragment>
    );
  }
}

export default Home;
