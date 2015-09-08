'use strict';

import React from 'react';
import ClockBitList from './ClockBitList';

export default class ClockBitListPair extends React.Component {
  render () {
    var value = this.props.value,
        upper = (value / 10) % 10,
        lower = value % 10,
        upperCount = this.props.upperCount,
        lowerCount = this.props.lowerCount;

    return (
      <div className="bitlist-pair">
        <div className="bitlist">
          <ClockBitList count={upperCount} value={upper}/>
        </div>
        <div className="bitlist">
          <ClockBitList count={lowerCount} value={lower}/>
          </div>
      </div>
    );
  }
}
