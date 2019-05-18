import React, { Component } from 'react';

class SignIn extends Component {

  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center">
      <div className="col-lg-5">
          <h2 className="text-center mb-4 mt-5">Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <p>{null}</p>
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
        </div>
      </div>
    )
  }
}
export default SignIn;
