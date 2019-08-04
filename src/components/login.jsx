import React, { Component } from 'react';
import Footer from '../components/common/footer';

class Login extends Component {
  render() {
    return (
      <div id="content">
        <div id="header">
          <p id="top" />
          <h1 id="logo">Politico</h1>
          <ul id="menu">
            <li>
              <a href="index.html">Log in</a>
            </li>
            <li>
              <a href="signup.html">Sign Up</a>
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
            <a href="reset.html">Forgot Password?</a>
          </p>
          <button className="button button-block">
            <a href="user/user.html">Log In</a>
          </button>
        </div>
        <Footer/>

      </div>
    );
  }
}

export default Login;
