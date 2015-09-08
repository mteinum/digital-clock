'use strict';

import React from 'react';
import classNames from 'classnames';

export default class Minute extends React.Component{
  render() {
    var n = this.props.n,
        now = this.props.now;

    var active = now.getMinutes() % 5 >= n;
    var current = now.getMinutes() % 5 == n;

    var classes = classNames({
      active: active,
      current: current
    });

    return (<span className={classes}>.</span>);
  }
}
