import React, { Component } from 'react';
import Footer from '../components/common/footer';
class SignUp extends Component {
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
              <a href="admin/admin.html">Get Started</a>
            </button>
          </div>
          <Footer/>
        </div>
      );
    }
  }
  
  export default SignUp;
  