'use strict';

import React from 'react';
import classNames from 'classnames';

export default class ClockBit extends React.Component {

  render() {

    var test = "hello world";
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
}
