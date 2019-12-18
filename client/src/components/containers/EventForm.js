import React, { Component, useState, useEffect } from "react";
import EventDetail from "../presentation/EventDetail";
import { connect } from "react-redux";
import { submitEvent } from "../../actions/eventActions";
import { withRouter } from "react-router-dom";
import { fetchLocations } from "../../actions/locationActions";
import {
  FormControl,
  Button,
  TextField,
  Grid,
  Typography,
  Paper,
  MenuItem
} from "@material-ui/core";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const EventForm = props => {
  const [submission, setSubmission] = useState({});

  useEffect(() => {
    props.dispatch(fetchLocations());
  }, []);

  const updateSubmission = event => {
    setSubmission({
      ...submission,
      [event.target.id]: event.target.value
    });
  };

  const submitSubmission = () => {
    props.dispatch(submitEvent(submission));
    props.history.push("/");
  };

  const handleLocationChange = event => {
    setSubmission({
      ...submission,
      [event.target.name]: event.target.value
    });
  };
  const handleContactInfoChange = event => {
    const { location } = submission;
    const { contactinfo } = location;
    setSubmission({
      ...submission,
      location: {
        ...location,
        contactinfo: {
          ...contactinfo,
          [event.target.id]: event.target.value
        }
      }
    });
  };

  const handleStartDateChange = date => {
    setSubmission({
      ...submission,
      start: date
    });
  };

  const handleEndDateChange = date => {
    setSubmission({
      ...submission,
      end: date
    });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Paper style={{ padding: 20, margin: 20, maxWidth: 600 }}>
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              onChange={updateSubmission}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl margin="normal" required fullWidth>
              <TextField
                required
                select
                name="location"
                label="Location"
                onChange={handleLocationChange}
              >
                {props.locations.map(option => (
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
              onChange={updateSubmission}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Start date</Typography>
          </Grid>
          <Grid item xs={12}>
            <DateTimePicker
              fullWidth
              onChange={handleStartDateChange}
              id="start"
              value={submission.start}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>End date</Typography>
          </Grid>
          <Grid item xs={12}>
            <DateTimePicker
              fullWidth
              onChange={handleEndDateChange}
              id="end"
              value={submission.end}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={submitSubmission}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </MuiPickersUtilsProvider>
  );
};

const mapStateToProps = state => {
  return { locations: state.locations.locations };
};

export default withRouter(connect(mapStateToProps)(EventForm));
