import React from "react";

import NewsItemPlaceholder from "./NewsItemPlaceholder";

const Loader = (props) => {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-md-3 my-2">
          <NewsItemPlaceholder mode={props.mode} />
        </div>
        <div className="col-md-3 my-2">
          <NewsItemPlaceholder mode={props.mode} />
        </div>
        <div className="col-md-3 my-2">
          <NewsItemPlaceholder mode={props.mode} />
        </div>
        <div className="col-md-3 my-2">
          <NewsItemPlaceholder mode={props.mode} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
