import React, { Component } from 'react';

class Home extends Component {

  render() {

    return (
      <div className="container mt-4 d-flex align-items-center justify-content-center">
        <div className="row">
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Redflags</h5>
                <p className="card-text"><i className="fa fa-flag red fa-2x" aria-hidden="true"></i></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Interventions</h5>
                <p className="card-text"><i className="fa fa-handshake theme-blue fa-2x" aria-hidden="true"></i></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Home;
