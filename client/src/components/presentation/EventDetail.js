import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchEventItem } from "../../actions/eventActions";

class EventDetail extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.body}</p>
      </div>
    );
  }
}

EventDetail.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default EventDetail;
