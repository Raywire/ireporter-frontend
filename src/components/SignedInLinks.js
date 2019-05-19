import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignedInLinks extends Component {
  handleLogout = () => {
    localStorage.clear();
  };

  render() {
    return (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0" data-test="signedInLink">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/create">
            Red Flags
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/create">
            Interventions
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </li>
        <li className="nav-item">
          <button id="logout" class="btn btn-link"><i class="fa fa-power-off" aria-hidden="true"></i></button>
        </li>
      </ul>
    );
  }
}

export default SignedInLinks;
