'use strict';
import React from 'react';
require('./basic.css');

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Hello!</h1>
        <p>Simple app. Tests requiring CSS.</p>
      </div>
    );
  }
}
