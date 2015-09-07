'use strict';

import { Component } from 'react';
import classNames from 'classnames';

export default class ClockBit extends Component {

  render() {

    var set = this.props.bitmask & this.props.value;

    var classes = classNames({
      bit: true,
      on: set,
      off: !set
    });

    return (
      <div className={classes}></div>
    );
  }
}
