import React, { Component } from "react";
import EventDetail from "../presentation/EventDetail";
import { connect } from "react-redux";
import { fetchEventItem } from "../../actions/eventActions";
import ParticipantPanel from "./ParticipantPanel";
import { List, Grid, Typography, Paper } from "@material-ui/core";

class EventContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEventItem(this.props.match.params.id));
  }

  render() {
    let { eventItem } = this.props;

    return (
      <Paper style={{ padding: 20, margin: 20, maxWidth: 600 }}>
        <Grid container spacing={2}>
          <Grid item>
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
          </Grid>
        </Grid>
      </Paper>
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
