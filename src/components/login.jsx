import React, { Component } from 'react';
import Footer from '../components/common/footer';
import { Link } from 'react-router-dom'

class Login extends Component {
  state = {
    email: '',
    password: ''
  };
  render() {
    return (
      <div id="content">
        <div id="header">
          <p id="top" />
          <h1 id="logo">Politico</h1>
          <ul id="menu">
            <li>
              <Link to="/">Log in</Link>
            </li>
            <li>
              <Link to="signup">Sign Up</Link>
            </li>
          </ul>
        </div>
        <h1 id="top_form">Welcome To Politico</h1>

        <div className="form">
          <div className="field-wrap">
            <h1>Please login!</h1>
          </div>
          <div className="field-wrap">
            <input
              placeholder="Email Address *"
              type="email"
              required
              autoComplete="off"
            />
          </div>

          <div className="field-wrap">
            <input
              placeholder="password *"
              type="password"
              required
              autoComplete="off"
            />
          </div>

          <p className="forgot">
            <Link to="reset">Forgot Password?</Link>
          </p>
          <button className="button button-block">
            <Link to="user">Log In</Link>
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
