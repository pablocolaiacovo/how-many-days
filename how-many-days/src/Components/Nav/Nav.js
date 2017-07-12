import React from 'react';
import { NavLink } from 'react-router-dom';

import Login from '../Auth/Login';

class Nav extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui large secondary inverted pointing menu">
          <NavLink exact activeClassName='active' className='item' to='/'>Home</NavLink>
          <a className="item">Work</a>
          <a className="item">Company</a>
          <a className="item">Careers</a>
          <Login auth={this.props.auth} />
        </div>
      </div>
    );
  }
}

export default Nav;