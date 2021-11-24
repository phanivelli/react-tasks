import React, { Component } from "react";
import ButtonFn from "./Button";

class Counter extends Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <ButtonFn count={this.handleIncrement} />
      </div>
    );
  }
}
export default Counter;
