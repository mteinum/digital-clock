'use strict';

var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var ClockBitListPair = require('./clockBitListPair');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <Header date={this.props.date}/>

      <div className="clock">

        <ClockBitListPair
          lowerCount="4"
          upperCount="2"
          value={this.props.date.getHours()}/>

        <ClockBitListPair
          lowerCount="4"
          upperCount="3"
          value={this.props.date.getMinutes()}/>

        <ClockBitListPair
          lowerCount="4"
          upperCount="3"
          value={this.props.date.getSeconds()}/>

      </div>

        <Footer />

      </div>
    );
  }
});
