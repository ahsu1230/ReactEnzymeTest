'use strict';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    };
  }

  render() {
    const items = this.state.content.map((c, index) =>
      <Item key={index} content={c}/>
    );
    return (
      <div className="app">
        <ul>{items}</ul>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <li>{this.props.content}</li>
    );
  }
}
