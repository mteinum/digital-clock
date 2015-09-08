import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import WordClock from './components/wordclock/WordClock';
import BinaryClock from './components/binaryclock/Clock';
import Home from './Home';

class App extends React.Component {
  render(){
    return (
      <section>
        <div className="menu main">
          <Link to="wordclock">word</Link>
          <Link to="binaryclock">binary</Link>
        </div>

          <RouteHandler />

        <footer>
          <a href="http://twitter.com/mteinum">@mteinum</a>
        </footer>
      </section>
    );
  }
}

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={WordClock}/>
    <Route name="wordclock" path="/clock/word" handler={WordClock}/>
    <Route name="binaryclock" path="/clock/binary" handler={BinaryClock}/>
  </Route>
);

Router.run(routes, function (Handler){
  React.render(<Handler/>, document.body);
});
