'use strict';

import React from 'react';
import ClockBit from './clockBit';

var bitset = [1, 2, 4, 8]

export default class ClockBitList extends React.Component {

  render () {
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
}
