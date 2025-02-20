import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    return (
      <div className="container text-center my-5">
        <h1 style={{ fontSize: 100, color: "#dc3545" }}>NewsNest</h1>
        <h6
          className={`mt-3 text-${
            this.props.mode === "light" ? "dark" : "light"
          }`}
        >
          Your hub of daily <span style={{ color: "#dc3545" }}>Global</span>{" "}
          News Headlines
        </h6>
      </div>
    );
  }
}

export default Welcome;
