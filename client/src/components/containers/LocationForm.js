import React, { Component } from "react";
import { connect } from "react-redux";
import { submitLocation } from "../../actions/locationActions";
import { withRouter } from "react-router-dom";
import { Button, TextField, Grid, Paper } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";

class LocationForm extends Component {
  constructor() {
    super();
    this.state = {
      submission: {}
    };
  }

  componentDidMount() {
    console.log(this.state.submission);
  }

  updateSubmission(event) {
    let updatedSubmission = Object.assign({}, this.state.submission);

    updatedSubmission[event.target.id] = event.target.value;
    this.setState({
      submission: updatedSubmission
    });
  }

  submitSubmission() {
    this.props.dispatch(submitLocation(this.state.submission));
    this.props.history.push("/");
  }

  handleContactInfoChange(event) {
    let updatedSubmission = Object.assign({}, this.state.submission, {
      contactinfo: {
        ...this.state.submission.contactinfo,
        [event.target.id]: event.target.value
      }
    });
    this.setState({
      submission: updatedSubmission
    });
  }

  render() {
    const classes = this.props;
    return (
      <Paper
        style={{ padding: 20, marginLeft: 20, maxWidth: 600, marginTop: 20 }}
      >
        <Grid
          className={classes.root}
          container
          spacing={2}
          justify="space-between"
        >
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="city"
              label="City"
              onChange={this.updateSubmission.bind(this)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="address"
              label="Address"
              onChange={this.updateSubmission.bind(this)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="phone"
              label="Phone Number"
              onChange={this.handleContactInfoChange.bind(this)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="web"
              label="Web"
              onChange={this.handleContactInfoChange.bind(this)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.submitSubmission.bind(this)}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(withRouter(LocationForm));
