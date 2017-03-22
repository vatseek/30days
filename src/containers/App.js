import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {Index} from './Index';
import Home from '../views/Home/Home';
import About from '../views/About/About';

export class App extends React.Component {
  render() {
    const createElement = (Component, props) => {
      return <Component
        actions={this.props.actions}
        {...props} />
    };
    return (
      <Router history={hashHistory} createElement={createElement}>
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