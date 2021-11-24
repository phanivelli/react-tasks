import React from "react";

export default class ButtonFn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { count } = this.props;
    return <button onClick={count}>Increment</button>;
  }
}
