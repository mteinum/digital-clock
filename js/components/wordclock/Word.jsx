'use strict';

import React from 'react';
import classNames from 'classnames';

// TEN QUARTER TWENTY FIVE HALF PAST TO

export default class Word extends React.Component {
  between(a, b, c) {
  		return a >= b && a <= c;
  	}

  	contains(minute, arr) {
  		for (var i=0; i < arr.length; i++) {
  			if (this.between(minute, arr[i][0], arr[i][1]))
  				return true;
  		}
  		return false;
  	}

  render () {

    var now = this.props.now.getMinutes(),
        ranges = this.props.ranges,
        text = this.props.text;

    var classes = classNames({
      active: this.contains(now, ranges)
    });

    return (<div className={classes}>{text}</div>);
  }
}
