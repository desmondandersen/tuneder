import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Welcome extends Component {
  render() {
    return <h1>Hello there</h1>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
