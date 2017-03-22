import React from 'react';
import 'whatwg-fetch';
import './App.css';
import {Index} from './containers/Index';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Home from './views/Home/Home';
import About from './views/About/About';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Index}>
          <IndexRoute component={Home}/>
          <Route path="home" component={Home}/>
          <Route path="about" component={About}/>
        </Route>
      </Router>
    )
  }
}

export default App;