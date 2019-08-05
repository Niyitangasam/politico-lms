import React, { Component } from 'react';
import configureStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signUp';
import Reset from './components/reset';
import './assets/css/style';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={props => <Login {...props} />} />
            <Route exact path="/signup" render={props => <SignUp {...props} />} />
            <Route exact path="/reset" render={props => <Reset {...props} />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
