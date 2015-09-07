'use strict';

import { Component } from 'react';

export default class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <div>
          <a href="http://twitter.com/mteinum">@mteinum</a>
        </div>
        <div>
          <a href="https://github.com/mteinum/digital-clock">source</a>
        </div>
      </div>
    );
  }
}
