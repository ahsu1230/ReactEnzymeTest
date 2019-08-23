'use strict';
import React from 'react';
const srcImg1 = "asdf.jpg";
const srcImg2 = "asdf.png";
const srcImg3 = "asdf.svg";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Hello!</h1>
        <p>Simple app. Tests requiring images (.jpg, .png, .svg)</p>
        <img src={srcImg1}/>
        <img src={srcImg2}/>
        <img src={srcImg3}/>
      </div>
    );
  }
}
