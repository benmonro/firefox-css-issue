import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {browserHistory, Route, Router} from 'react-router';
import PageA from './PageA';
import PageB from './PageB';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router history={browserHistory}>
            <Route path="/a" component={PageA} />
            <Route path="/b" component={PageB} />
        </Router>
      </div>
    );
  }
}

export default App;
