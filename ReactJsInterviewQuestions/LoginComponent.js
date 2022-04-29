import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    //connect your api and check the username and password match and then set the status and redirect the welcome page
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          username:
          <input name="username" onChange={this.handleChange.bind(this)} />
          <br />
          password:
          <input
            type="password"
            name="password"
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <br />
          <button style={{ marginLeft: "190px" }}>Save</button>
        </div>
      </form>
    );
  }
}
