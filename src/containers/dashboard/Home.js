import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import authStatus from '../../helpers/authStatus';

class Home extends Component {

  render() {
    if (authStatus() === true) {
      
      return (
        <div className="container mt-4  align-items-center justify-content-center">
          <div className="row dashboard">
          <div className="col-sm-4">
            <Link to="/redflags">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-danger text-center">Redflags</h5>
                  <p className="card-text text-center text-danger"><i className="fa fa-flag red fa-2x" aria-hidden="true"></i></p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-4">
            <Link to="/interventions">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-success text-center">Interventions</h5>
                  <p className="card-text text-center text-success"><i className="fa fa-handshake fa-2x" aria-hidden="true"></i></p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-4">
            <Link to="/profile">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-info text-center">Profile</h5>
                  <p className="card-text text-center text-info"><i className="fa fa-user fa-2x" aria-hidden="true"></i></p>
                </div>
              </div>
            </Link>
          </div>
          </div>
        </div>
      )
    }
    return <Redirect to="/signin" />
  }
}

export default Home;
