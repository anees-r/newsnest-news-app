import React from "react";

const NewsItemPlaceholder = (props) => {
  return (
    <div>
      <div
        className={`card bg-${props.mode} shadow border my-4 mx-2`}
        aria-hidden="true"
      >
        <div
          className="container"
          style={{
            width: "100%",
            height: "148px",
            backgroundColor: "lightgray",
          }}
        ></div>
        <div className="card-body">
          <h5
            className={`card-text placeholder-glow text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <span className="placeholder col-6"></span>
          </h5>
          <p
            className={`card-text placeholder-glow text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <p
            tabIndex="-1"
            className="btn btn-outline-danger btn-danger btn-sm  col-6 mb-1"
            style={{
              width: "100%",
              height: "40px",
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default NewsItemPlaceholder;
