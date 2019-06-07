import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Login.css";

class Login extends Component {
  state = {
    hidden: true,
    contrasena: ""
  };

  showPassword = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  handleChange = e => {
    this.setState({
      contrasena: e.target.value
    });
  };
  render() {
    return (
      <div className="login">
        <h1>LOGIN</h1>
        <form>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type={this.state.hidden ? "password" : "text"}
            id="password"
            value={this.state.contrasena}
            onChange={this.handleChange}
          />
          <span
            role="img"
            aria-label="Show Password"
            onClick={this.showPassword}
          >
            👀
          </span>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/react-gz/signup">Sign-up</Link>
        </p>
      </div>
    );
  }
}

export default Login;
