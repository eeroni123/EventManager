import React, { Component } from "react";
import SignUpElement from "../presentation/SignUpElement";
import SignUpForm from "../presentation/SignUpForm";
import { List, Grid, Typography } from "@material-ui/core";

class ParticipantPanel extends Component {
  render() {
    const yesParticipants = this.props.participants
      .filter(p => p.attendance === "Yes")
      .map((participant, i) => {
        return <SignUpElement data={participant} />;
      });

    const maybeParticipants = this.props.participants
      .filter(p => p.attendance === "Maybe")
      .map((participant, i) => {
        return <SignUpElement data={participant} />;
      });

    const noParticipants = this.props.participants
      .filter(p => p.attendance === "No")
      .map((participant, i) => {
        return <SignUpElement data={participant} />;
      });

    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Participants</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Yes: </Typography>
        </Grid>
        <Grid item xs={12}>
          <List>{yesParticipants}</List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Maybe: </Typography>
        </Grid>
        <Grid item xs={12}>
          <List>{maybeParticipants}</List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">No: </Typography>
        </Grid>
        <Grid item xs={12}>
          <List>{noParticipants}</List>
        </Grid>
        <Grid item xs={12}>
          <SignUpForm eventItemID={this.props.id} />
        </Grid>
      </Grid>
    );
  }
}

export default ParticipantPanel;
