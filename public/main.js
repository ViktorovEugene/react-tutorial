// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var name = require('./react_components/variables.js');
var name2 = require('./react_components/variables_2.js');


ReactDOM.render(
  <h1>Hello, world! { name } { name2 }</h1>,
  document.getElementById('content')
);
