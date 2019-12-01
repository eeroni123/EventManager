import React, { Component } from "react";
import EventDetail from "../presentation/EventDetail";
import { connect } from "react-redux";
import { fetchEventItem } from "../../actions/actions";

class EventContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEventItem(this.props.match.params.id));
  }

  render() {
    let { eventItem } = this.props;

    return (
      <div>
        <h2>Event Details</h2>
        {!this.props.eventItemLoading ? (
          <EventDetail data={eventItem} />
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    eventItem: state.events.eventItem,
    eventItemLoading: state.events.eventItemLoading
  };
};

export default connect(mapStateToProps)(EventContainer);
