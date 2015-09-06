'use strict';

import React from 'react';
import Header from './header';
import Footer from './footer';
import ClockBitListPair from './clockBitListPair';

export default class Clock extends React.Component {

  render () {
    return (
      <div>
        <Header date={this.props.date}/>

      <div className="clock">

        <ClockBitListPair
          lowerCount="4"
          upperCount="2"
          value={this.props.date.getHours()}/>

        <ClockBitListPair
          lowerCount="4"
          upperCount="3"
          value={this.props.date.getMinutes()}/>

        <ClockBitListPair
          lowerCount="4"
          upperCount="3"
          value={this.props.date.getSeconds()}/>

      </div>

        <Footer />

      </div>
    );
  }
}
