import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {Index} from './Index';
import Home from '../views/Home/Home';

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
        </Route>
      </Router>
    )
  }
}
export default App;