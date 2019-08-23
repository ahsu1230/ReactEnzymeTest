'use strict';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    const title = this.state.title;
    const message = this.props.message;
    return (
      <div className="app">
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    );
  }
}
