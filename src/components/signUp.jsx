import React, { Component } from 'react';
import Footer from '../components/common/footer';
import { Link } from 'react-router-dom';
class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
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
        <div class="form">
          <div class="field-wrap">
            <h1 align="center">Sign Up Here!</h1>
          </div>
          <div class="top-row">
            <div class="field-wrap">
              <input
                placeholder="Email Address *"
                type="email"
                required
                autoComplete="off"
              />
            </div>
            <div class="field-wrap">
              <input
                placeholder="First Name *"
                type="text"
                required
                autoComplete="off"
              />
            </div>

            <div class="field-wrap">
              <input
                placeholder="Last Name *"
                type="text"
                required
                autoComplete="off"
              />
            </div>
          </div>

          <div class="field-wrap">
            <input
              placeholder="Email Address *"
              type="email"
              required
              autoComplete="off"
            />
          </div>

          <div class="field-wrap">
            <input
              placeholder="Set A Password *"
              type="password"
              required
              autoComplete="off"
            />
          </div>

          <button type="submit" class="button button-block">
            <Link to="user">Get Started</Link>
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
