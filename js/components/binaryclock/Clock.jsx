'use strict';

import React from 'react';
import Header from './Header';
import ClockBitListPair from './ClockBitListPair';

export default class Clock extends React.Component {

  constructor (props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount(){
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 500);
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  render () {

    var date = this.state.date;

    return (
      <div>
        <Header date={date}/>
        <div className="clock">
          <ClockBitListPair
            lowerCount="4"
            upperCount="2"
            value={date.getHours()}/>
          <ClockBitListPair
            lowerCount="4"
            upperCount="3"
            value={date.getMinutes()}/>
          <ClockBitListPair
            lowerCount="4"
            upperCount="3"
            value={date.getSeconds()}/>
        </div>
      </div>
    );
  }
}
