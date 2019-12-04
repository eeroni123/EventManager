import React, { Component } from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EventIcon from "@material-ui/icons/Event";
import { withRouter } from "react-router-dom";

class EventListing extends Component {
  render() {
    console.log(this.props.data);
    return (
      <ListItem
        onClick={() =>
          this.props.history.push(`/events/${this.props.data._id}/signup`)
        }
      >
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText
          primary={this.props.data.name}
          secondary={
            this.props.data.location.city +
            ", " +
            this.props.data.location.address
          }
        />
      </ListItem>
    );
  }
}

EventListing.propTypes = {
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

export default withRouter(EventListing);
