import React, { Component } from "react";
import EventDetail from "../presentation/EventDetail";
import { connect } from "react-redux";
import { fetchEventItem } from "../../actions/eventActions";
import ParticipantPanel from "./ParticipantPanel";

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
          <div>
            <EventDetail data={eventItem} />{" "}
            <ParticipantPanel
              participants={this.props.participants}
              id={this.props.eventItem._id}
            />
          </div>
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
    participants: state.events.eventItem.participants,
    eventItemLoading: state.events.eventItemLoading
  };
};

export default connect(mapStateToProps)(EventContainer);
