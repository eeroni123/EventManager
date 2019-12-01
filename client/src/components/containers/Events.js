import React, { Component } from "react";
import EventListing from "../presentation/EventListing";
import { connect } from "react-redux";
import { fetchEvents } from "../../actions/actions";

class Events extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }
  render() {
    const eventItems = this.props.events.map((events, i) => {
      return (
        <li key={i}>
          <EventListing data={events} />
        </li>
      );
    });
    return (
      <div>
        <h2>Events</h2>
        {this.props.events.length > 0 ? (
          <ul>{eventItems}</ul>
        ) : (
          <div>No events at the moment..</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events.events
  };
};

export default connect(mapStateToProps)(Events);
