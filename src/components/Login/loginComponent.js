import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class loginComponent extends Component {

  onLoginClick = () => {
    if (this.state) {
      this.props.onLoginClick(this.state);
    }
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val,
    });
  };

  render() {
    return (
      <div className="login-box">
        <h2>AAA Login</h2>
        <div className="user-box">
          <input type="text" onChange={this.handleInputChange} name="id"/>
          <label>Account</label>
        </div>
        <div className="user-box">
          <input type="password" onChange={this.handleInputChange} name="password"></input>
          <label>Password</label>
        </div>
        <button className="btn btn-primary" onClick={this.onLoginClick}>
          Login
        </button>
      </div>
    );
  }
}

export default loginComponent;
