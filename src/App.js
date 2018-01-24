import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {browserHistory, IndexRoute, Route, Router} from 'react-router';
import PageA from './PageA';
import PageB from './PageB';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo}
                         className="App-logo"
                         alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Router history={browserHistory}>
                    <Route path="/">
                        <IndexRoute component={PageA}/>
                        <Route path="/b"
                               component={PageB}/>
                    </Route>
                </Router>
            </div>
        );
    }
}

export default App;
