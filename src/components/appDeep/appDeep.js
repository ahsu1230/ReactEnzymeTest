'use strict';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Component1 header={"Comp1"}/>
        <Component2 header={"Comp2"}/>
      </div>
    );
  }
}

class Component1 extends React.Component {
  render() {
    return (
      <div className="comp1">
        <h1>{this.props.header}</h1>
      </div>
    );
  }
}

class Component2 extends React.Component {
  render() {
    return (
      <div className="comp2">
        <Component3 header={this.props.header}/>
      </div>
    );
  }
}

class Component3 extends React.Component {
  render() {
    return (
      <div className="comp3">
        <h3>{this.props.header}</h3>
      </div>
    );
  }
}
