import React, { Component } from "react";
import EventDetail from "../presentation/EventDetail";
import { connect } from "react-redux";
import { submitEvent } from "../../actions/eventActions";
import { withRouter } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import { fetchLocations } from "../../actions/locationActions";
import {
  FormControl,
  Button,
  TextField,
  Grid,
  Typography,
  Paper
} from "@material-ui/core";
import { MenuItem, Select } from "@material-ui/core";

class EventForm extends Component {
  constructor() {
    super();
    this.state = {
      submission: {}
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchLocations());
  }

  updateSubmission(event) {
    let updatedSubmission = Object.assign({}, this.state.submission);

    updatedSubmission[event.target.id] = event.target.value;
    this.setState({
      submission: updatedSubmission
    });
  }

  submitSubmission() {
    console.log(this.state.submission);
    this.props.dispatch(submitEvent(this.state.submission));
    this.props.history.push("/");
  }

  handleLocationChange(event) {
    console.log(event.target.name);
    let updatedSubmission = Object.assign({}, this.state.submission);
    updatedSubmission[event.target.name] = event.target.value;

    this.setState({
      submission: updatedSubmission
    });
  }
  handleContactInfoChange(event) {
    let updatedSubmission = Object.assign({}, this.state.submission, {
      location: {
        ...this.state.submission.location,
        contactinfo: {
          ...this.state.submission.location.contactinfo,
          [event.target.id]: event.target.value
        }
      }
    });
    this.setState({
      submission: updatedSubmission
    });
  }

  handleStartDateChange(date) {
    let updatedSubmission = Object.assign({}, this.state.submission);
    updatedSubmission["start"] = date;
    this.setState({
      submission: updatedSubmission
    });
  }

  handleEndDateChange(date) {
    let updatedSubmission = Object.assign({}, this.state.submission);
    updatedSubmission["end"] = date;
    this.setState({
      submission: updatedSubmission
    });
  }

  render() {
    return (
      <Paper
        style={{ padding: 20, marginLeft: 20, maxWidth: 600, marginTop: 20 }}
      >
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              onChange={this.updateSubmission.bind(this)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl margin="normal" required fullWidth>
              <TextField
                required
                select
                name="location"
                label="Location"
                onChange={this.handleLocationChange.bind(this)}
              >
                {this.props.locations.map(option => (
                  <MenuItem key={option._id} value={option._id}>
                    {option.city + ", " + option.address}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="description"
              label="Description"
              onChange={this.updateSubmission.bind(this)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Start date</Typography>
          </Grid>
          <Grid item xs={12}>
            <DateTimePicker
              fullWidth
              onChange={this.handleStartDateChange.bind(this)}
              id="start"
              value={this.state.submission.start}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>End date</Typography>
          </Grid>
          <Grid item xs={12}>
            <DateTimePicker
              fullWidth
              onChange={this.handleEndDateChange.bind(this)}
              id="end"
              value={this.state.submission.end}
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
  return { locations: state.locations.locations };
};

export default withRouter(connect(mapStateToProps)(EventForm));
