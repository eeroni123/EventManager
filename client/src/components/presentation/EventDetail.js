import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class EventDetail extends Component {
  render() {
    let date = new Date(this.props.data.start);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let enddate = new Date(this.props.data.end);
    let endday = enddate.getDate();
    let endmonth = enddate.getMonth() + 1;
    let endyear = enddate.getFullYear();
    let endhours = enddate.getHours();
    let endminutes = enddate.getMinutes();
    if (minutes == 0) minutes = "00";
    if (endminutes == 0) endminutes = "00";
    if (hours == 0) hours = "00";
    if (endhours == 0) endhours = "00";

    return (
      <Grid container spacing={2} justify="space-between">
        <Grid item xs={12}>
          <Typography variant="h2">{this.props.data.name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">
            {day +
              "." +
              month +
              "." +
              year +
              " Klo " +
              hours +
              "." +
              minutes +
              " - " +
              endday +
              "." +
              endmonth +
              "." +
              endyear +
              " Klo " +
              endhours +
              ":" +
              endminutes}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Location</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            {this.props.data.location.city +
              ",  " +
              this.props.data.location.address}
          </Typography>
          <Typography variant="body1">
            {this.props.data.location.contactinfo.web}
          </Typography>
          <Typography variant="body1">
            {this.props.data.location.contactinfo.phone}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Description</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{this.props.data.description}</Typography>
        </Grid>
      </Grid>
    );
  }
}

EventDetail.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    participants: PropTypes.array
  })
};

export default EventDetail;
