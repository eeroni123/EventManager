import React, { Component } from "react";
import { submitSignUp } from "../../actions/eventActions";
import { connect } from "react-redux";

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      signup: ""
    };
  }

  updateSignUp(event) {
    this.setState({
      signup: event.target.value
    });
  }

  submitSignUp() {
    this.props.dispatch(
      submitSignUp(this.props.eventItemID, this.props.username, {
        body: this.state.signup
      })
    );

    this.setState({
      signup: ""
    });
  }

  render() {
    return (
      <div>
        <h3>Sign Up For Event</h3>
        <textarea
          value={this.state.signup}
          onChange={this.updateSignUp.bind(this)}
          id="body"
          type="text"
        ></textarea>
        <br />

        <button onClick={this.submitSignUp.bind(this)}>Post</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username
  };
};

export default connect(mapStateToProps)(SignUpForm);
