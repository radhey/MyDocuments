import React, { Component } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "hi" };
  }
  onChangeHandle(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    console.log("name was entered = " + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChangeHandle.bind(this)}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Form;
