import React from "react";

const Welcome = (props) => {
  return (
    <div
      className="container text-center "
      style={{ marginTop: "90px", marginBottom: "-50px" }}
    >
      <h1 style={{ fontSize: 100, color: "#dc3545" }}>NewsNest</h1>
      <h6 className={`mt-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        Your hub of daily <span style={{ color: "#dc3545" }}>Global</span> News
        Headlines
      </h6>
    </div>
  );
};

export default Welcome;
