import React, { Component } from "react";

import News from "./News";

export class Home extends Component {
  render() {
    return (
      <div>
        <News category="general" pageSize="4" mode={this.props.mode} />
        <News category="business" pageSize="4" mode={this.props.mode} />
        <News category="entertainment" pageSize="4" mode={this.props.mode} />
        <News category="health" pageSize="4" mode={this.props.mode} />
        <News category="science" pageSize="4" mode={this.props.mode} />
        <News category="sports" pageSize="4" mode={this.props.mode} />
        <News category="technology" pageSize="4" mode={this.props.mode} />
      </div>
    );
  }
}

export default Home;
