import React, { Component } from "react";
import { Link } from "react-router-dom";
import Authentication from "../containers/Authentication";

class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Event Manager</h1>
        </div>
        <div>
          <Authentication />
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
