'use strict';

var React = require('react');
var ClockBit = require('./clockBit');

var bitset = [1, 2, 4, 8]

module.exports = React.createClass({
  render: function(){
    var value = this.props.value,
       bits = bitset.slice(0, this.props.count);

       bits.reverse();

    var bitNodes = bits.map(function (bit){
      return (
        <ClockBit key={bit} value={value} bitmask={bit}/>
      );
    });

    return (
      <div>
        {bitNodes}
      </div>
    );
  }
});
