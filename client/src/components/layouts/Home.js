import React, { Component } from "react";
import Events from "../containers/Events";
import { FormControl, Button, TextField, Grid } from "@material-ui/core";
class Home extends Component {
  render() {
    return (
      <Grid container spacing={1} justify="space-between">
        <Grid item xs={12}>
          <Events />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
