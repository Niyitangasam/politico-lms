import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Reset extends Component {
  state = {
    email: ''
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

        <div className="form">
          <div className="field-wrap">
            <h2>
              Please provide Email used to sign Up, will send a reset link.
            </h2>
          </div>
          <div className="field-wrap">
            <input
              placeholder="Email Address *"
              type="email"
              required
              autoComplete="off"
            />
          </div>

          <button className="button button-block">Reset</button>
        </div>
      </div>
    );
  }
}

export default Reset;
