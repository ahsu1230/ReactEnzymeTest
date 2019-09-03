'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Handling Click");
  }

  render() {
    return (
      <div className="app">
        <button onClick={this.handleClick}>ClickMe</button>
      </div>
    );
  }
}
