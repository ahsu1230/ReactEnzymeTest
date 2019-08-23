'use strict';
import React from 'react';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Link to="/page2">To Page 2</Link>
      </div>
    );
  }
}
