// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var name = require('./react_components/variables.js');


ReactDOM.render(
  <h1>Hello, world! { name }</h1>,
  document.getElementById('content')
);
