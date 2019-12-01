import React, { Component } from "react";
import { Link } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Event Manager</h1>
        </div>
        <div>{this.props.children}</div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Layout;
