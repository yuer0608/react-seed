import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  render() {
    return <div>{this.state.count}你好 发发大水</div>;
  }
}
