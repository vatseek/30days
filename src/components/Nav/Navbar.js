import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';


class Navbar extends React.Component {
  render() {
    const {currentUser} = this.props;
    return (
      <div className="navbar">
        <Link
          className="link"
          to="/home"
          activeClassName="active">
          Home
        </Link>
        <Link
          className="link"
          to="/about"
          activeClassName="active">
          About
        </Link>
        {currentUser.loggedIn ?
          <Link
            to="/logout"
            className="link"
            activeClassName="active">Logout</Link> :
          <Link
            to="/login"
            className="link"
            activeClassName="active">Login</Link>}
      </div>
    );
  }
}

export default connect(state => ({
  currentUser: state.currentUser
}))(Navbar);