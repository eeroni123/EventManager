import React, { Component } from "react";
import { submitRegister } from "../../actions/authActions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      details: {}
    };
  }

  updateDetails(event) {
    let updateDetails = Object.assign({}, this.state.details);

    updateDetails[event.target.id] = event.target.value;
    this.setState({
      details: updateDetails
    });
  }

  register() {
    this.props.dispatch(submitRegister(this.state.details));
  }

  render() {
    const classes = this.props;
    if (this.props.loggedIn) this.props.history.push("/");
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              autoFocus
              onChange={this.updateDetails.bind(this)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              onChange={this.updateDetails.bind(this)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.register.bind(this)}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {" Already Have an account? Log in"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.auth.loggedIn };
};

export default connect(mapStateToProps)(withRouter(Register));
