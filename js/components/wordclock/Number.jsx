'use strict';

import React from 'react';
import classNames from 'classnames';

var numbers = [
  'ONE',
  'TWO',
  'THREE',
  'FOUR',
  'FIVE',
  'SIX',
  'SEVEN',
  'EIGHT',
  'NINE',
  'TEN',
  'ELEVEN',
  'TWELVE'];

export default class Number extends React.Component {
  isActive() {
    var now = this.props.now,
        hour = this.props.value;

    if (now.getMinutes() > 34) {
      return (now.getHours() + 1) % 12 == hour || ((now.getHours() + 1) % 12 === 0 && hour === 12);
    }
    else {
      return now.getHours() % 12 == hour || (now.getHours() % 12 == 0 && hour == 12);
    }
  }

  render() {
    var classes = classNames({
      active: this.isActive()
    });

    return (<div className={classes}>{numbers[this.props.value - 1]}</div>)
  }
}
