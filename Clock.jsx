'use strict';

import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ClockBitListPair from './ClockBitListPair';

export default class Clock extends Component {

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
