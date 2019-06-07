import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Login.css";
import "./css/Signup.css";

class Signup extends Component {
  state = {
    contrasena: "",
    hidden: true
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
      <div className="signup">
        <h1>SIGNUP</h1>
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
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account? <Link to="/react-gz/login">Login</Link>
        </p>
      </div>
    );
  }
}

export default Signup;
