import React, { Component } from 'react';
import configureStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import './assets/css/style';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={props => <Login {...props} />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
