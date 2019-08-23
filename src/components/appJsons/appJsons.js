'use strict';
import React from 'react';
import { mainRepo } from './jsonRepo.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    }
  }

  componentDidMount() {
    this.setState({
      content: mainRepo.all()
    });
  }

  render() {
    const items = this.state.content.map((c, index) =>
      <li key={index}>{c.name + "..." + c.nickname}</li>
    );
    return (
      <ul>{items}</ul>
    );
  }
}
