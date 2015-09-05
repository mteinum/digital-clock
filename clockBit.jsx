'use strict';

var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({

  render: function() {

    var set = this.props.bitmask & this.props.value;

    var classes = classNames({
      clockBit: true,
      on: set,
      off: !set
    });

    return (
      <div className={classes}></div>
    );
  }
});
