'use strict';

import React from 'react';
import Word from './Word';
import Number from './Number';
import Minute from './Minute';

var data = [
  { text: 'TEN',     ranges: [[10,14], [50,54]] },
  { text: 'QUARTER', ranges: [[15,19], [45,49]] },
  { text: 'TWENTY',  ranges: [[20,29], [35,44]] },
  { text: 'FIVE',    ranges: [[ 5, 9], [25,29], [35,39], [55,59]] },
  { text: 'HALF',    ranges: [[30,34]] },
  { text: 'PAST',    ranges: [[ 5,34]] },
  { text: 'TO',      ranges: [[35,59]] }
];

export default class WordClock extends React.Component {

  constructor(props){
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() })
    }, 500);
  }

  componentWillUnmount (){
    clearInterval(this.timerId);
  }

  render() {
    var now = this.state.date;

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12].map((i)=>{
      return (<Number value={i} now={now}/>);
    });

    var words = data.map((w)=>{
      return <Word text={w.text} ranges={w.ranges} now={now}/>
    });

    return (
      <div className="wordclock">
          <h1>Time</h1>

          <section className="words">
            {words}
            {numbers}
            <Word text="o'clock" ranges="[[0, 4]]" now={now}/>
          </section>

          <section className="minutes">
            <Minute n="1" now={now}/>
            <Minute n="2" now={now}/>
            <Minute n="3" now={now}/>
            <Minute n="4" now={now}/>
		      </section>

      </div>);
  }
}
