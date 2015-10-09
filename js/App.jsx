import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Link, Route } from 'react-router';

import WordClock from './components/wordclock/WordClock';
import BinaryClock from './components/binaryclock/Clock';
import Home from './Home';

class App extends React.Component {
  render(){
    return (
      <section>
        <div className="menu main">
          <Link to="/word">Word</Link>
          <Link to="/binary">Binary</Link>
        </div>

      {this.props.children}

        <footer>
          <a href="http://twitter.com/mteinum">@mteinum</a>
        </footer>
      </section>
    );
  }
}

let routes = (
  <Router>
  <Route path="/" component={App}>
    <IndexRoute component={WordClock}/>
    <Route path="/word" component={WordClock}/>
    <Route path="/binary" component={BinaryClock}/>
  </Route>
  </Router>
);

//Router.run(routes, function (Handler){
//  React.render(<Handler/>, document.body);
//});

render(routes, document.getElementById('content'));