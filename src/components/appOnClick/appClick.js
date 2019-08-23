'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Route, Switch } from 'react-router-dom';

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/" exact component={() => <div></div>}/>
          <Route path="/page2" component={() => <div></div>}/>
        </Switch>
      </div>
    );
  }
}

export class AppLink extends React.Component {
  render() {
    return (
      <div>
        <Link to="/page2">Go to Page 2</Link>
      </div>
    );
  }
}
