import React, { Component } from "react";

export class NewsItemPlaceholder extends Component {
  render() {
    return (
      <div>
        <div
          className="card my-4 mx-2"
          aria-hidden="true"
          style={{ width: "18rem" }}
        >
          <div
            className="container"
            style={{
              width: "288px",
              height: "148px",
              backgroundColor: "lightgray",
            }}
          ></div>
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a
              href=""
              tabIndex="-1"
              className="btn btn-primary disabled placeholder col-6"
            ></a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItemPlaceholder;
