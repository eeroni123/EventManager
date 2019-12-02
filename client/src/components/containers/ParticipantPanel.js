import React, { Component } from "react";
import SignUpElement from "../presentation/SignUpElement";
import SignUpForm from "../presentation/SignUpForm";
import { fetchEvents } from "../../actions/eventActions";

class ParticipantPanel extends Component {
  render() {
    const participantItems = this.props.participants.map((comment, i) => {
      return (
        <li key={i}>
          <SignUpElement data={comment} />
        </li>
      );
    });

    return (
      <div>
        <h2>Participants</h2>
        <ul>
          {this.props.participants.length > 0 ? (
            <ul>{participantItems}</ul>
          ) : (
            <div>No participants</div>
          )}
        </ul>
        <SignUpForm eventItemID={this.props.id} />
      </div>
    );
  }
}

export default ParticipantPanel;
