import React, { Component } from "react";
import { submitLogin } from "../../actions/authActions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";

class Login extends Component {
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

  login() {
    this.props.dispatch(submitLogin(this.state.details));
  }

  render() {
    const classes = this.props;
    if (this.props.loggedIn) this.props.history.push("/");
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
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
              onClick={this.login.bind(this)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
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

export default connect(mapStateToProps)(withRouter(Login));
