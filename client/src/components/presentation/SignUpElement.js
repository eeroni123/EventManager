import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

class SignUpElement extends Component {
  render() {
    console.log(this.props.data);
    return (
      <ListItem>
        <ListItemIcon>
          <Avatar>U</Avatar>
        </ListItemIcon>
        <ListItemText primary={this.props.data.username} />
      </ListItem>
    );
  }
}

SignUpElement.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired
  })
};

export default SignUpElement;
