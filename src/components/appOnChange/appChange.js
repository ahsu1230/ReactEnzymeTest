'use strict';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newValue = event.target.value;
    this.setState({inputValue: newValue});
  }

  render() {
    return (
      <div className="app">
        <input value={this.state.inputValue} onChange={this.handleChange}/>
      </div>
    );
  }
}
