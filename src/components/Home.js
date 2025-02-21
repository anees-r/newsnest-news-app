import React from "react";

import News from "./News";

const Home = (props) => {
  return (
    <div>
      <News
        welcomePage={true}
        setNewProgress={props.setNewProgress}
        category="general"
        pageSize="4"
        mode={props.mode}
      />
      <News
        welcomePage={true}
        setNewProgress={props.setNewProgress}
        category="business"
        pageSize="4"
        mode={props.mode}
      />
      <News
        welcomePage={true}
        setNewProgress={props.setNewProgress}
        category="entertainment"
        pageSize="4"
        mode={props.mode}
      />
      <News
        welcomePage={true}
        setNewProgress={props.setNewProgress}
        category="health"
        pageSize="4"
        mode={props.mode}
      />
      <News
        welcomePage={true}
        setNewProgress={props.setNewProgress}
        category="science"
        pageSize="4"
        mode={props.mode}
      />
      <News
        welcomePage={true}
        setNewProgress={props.setNewProgress}
        category="sports"
        pageSize="4"
        mode={props.mode}
      />
      <News
        welcomePage={true}
        setNewProgress={props.setNewProgress}
        category="technology"
        pageSize="4"
        mode={props.mode}
      />
    </div>
  );
};

export default Home;
