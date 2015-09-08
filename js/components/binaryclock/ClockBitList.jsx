'use strict';

import React from 'react';
import ClockBit from './ClockBit';

var bitset = [
  1, 2, 4, 8
]

export default class ClockBitList extends React.Component {

  render () {
    var value = this.props.value,
    bits = bitset.slice(0, this.props.count);

    bits.reverse();

    var bitNodes = bits.map(function(bit) {
      return (
        <ClockBit bitmask={bit} key={bit} value={value}/>
      );
    });

    return (
      <div>
        {bitNodes}
      </div>
    );
  }
}
