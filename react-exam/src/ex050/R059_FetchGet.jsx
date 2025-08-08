import React, { Component } from "react";

class R059_FetchGet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ResponseTitle: "",
    };
  }
  componentDidMount = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/3"
    );
    const body = await response.json();
    this.setState({ ResponseTitle: body.title });
  };
  render() {
    return <div>{this.state.ResponseTitle}</div>;
  }
}

export default R059_FetchGet;
