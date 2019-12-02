import React, { Component } from "react";
import PropTypes from "prop-types";

class SignUpElement extends Component {
  render() {
    return (
      <div>
        <div>
          <b>{this.props.data.username}</b>
        </div>
        <div>{this.props.data.body}</div>
      </div>
    );
  }
}

SignUpElement.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default SignUpElement;
