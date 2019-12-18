import React, { Component } from "react";
import EventListing from "../presentation/EventListing";
import { connect } from "react-redux";
import { fetchEvents } from "../../actions/eventActions";
import {
  List,
  FormControl,
  Grid,
  Paper,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
class Events extends Component {
  constructor() {
    super();
    this.state = {
      sortby: ""
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ sortby: e.target.value });
  }
  render() {
    let eventItems = this.props.events.map((event, i) => (
      <EventListing data={event} />
    ));

    if (this.state.sortby == "location") {
      eventItems = this.props.events
        .sort((a, b) => {
          if (a.location.city.toLowerCase() > b.location.city.toLowerCase())
            return 1;
          if (b.location.city.toLowerCase() > a.location.city.toLowerCase())
            return -1;

          return 0;
        })
        .map((event, i) => <EventListing data={event} />);
    }
    if (this.state.sortby == "time") {
      eventItems = this.props.events
        .sort(function(a, b) {
          if (new Date(a.start) > new Date(b.start)) return 1;
          if (new Date(a.start) < new Date(b.start)) return -1;
          return 0;
        })
        .map((event, i) => <EventListing data={event} />);
    }
    return (
      <Paper style={{ padding: 20, margin: 20, maxWidth: 600 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Sort By</InputLabel>
              <Select
                id="sortby"
                value={this.state.sortby}
                onChange={this.handleChange.bind(this)}
              >
                <MenuItem value="location">Location</MenuItem>
                <MenuItem value="time">Time</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <List>{eventItems}</List>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events.events
  };
};

export default connect(mapStateToProps)(Events);
