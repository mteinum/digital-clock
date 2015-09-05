'use strict';

var React = require('react');
var Clock = require('./clock');

setInterval(function(){
  React.render(
    <Clock date={new Date()} />,
    document.getElementById('content'));
  }, 500);
