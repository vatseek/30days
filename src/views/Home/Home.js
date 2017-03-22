import React from 'react';
import {connect} from 'react-redux';

const Home = ({actions, currentTime}) => {
  return (
    <div>
      <p>Current time: {currentTime.currentTime.toString()}</p>
      <button onClick={actions.currentTime.updateTime}>Update</button>
    </div>
  );
};

Home.defaultProps = {
  actions: {},
  currentTime: new Date()
};

export default connect(state => ({currentTime: state.currentTime}))(Home);