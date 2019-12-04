import React, { Component } from "react";
import { submitSignUp } from "../../actions/eventActions";
import { connect } from "react-redux";
import { attendanceType } from "../../utils/enums";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import { MenuItem, Grid } from "@material-ui/core";

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      signup: "No"
    };
  }

  updateSignUp(event) {
    console.log(event.target.value);
    this.setState({
      signup: event.target.value
    });
  }

  submitSignUp() {
    this.props.dispatch(
      submitSignUp(this.props.eventItemID, this.props.username, {
        attendance: this.state.signup
      })
    );

    this.setState({
      signup: "No"
    });
  }

  render() {
    const classes = this.props;
    console.log(this.props.eventItemID);
    return (
      <Grid container spacing={2} justify="space-between">
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            Sign Up For Event
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl margin="normal" required fullWidth>
            <TextField
              select
              id="signup"
              value={this.state.signup}
              onChange={this.updateSignUp.bind(this)}
            >
              {attendanceType.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.submitSignUp.bind(this)}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username
  };
};

export default connect(mapStateToProps)(SignUpForm);
