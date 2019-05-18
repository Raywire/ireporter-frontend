import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../../store/actions/authActions';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signInUser(this.state);
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { authMessage } = this.props;

    if (authMessage && authMessage.message === 'password or username is invalid') {
      document.getElementById('username').classList.add('is-invalid');
      document.getElementById('password').classList.add('is-invalid');
      document.getElementById('message').innerText = authMessage.message;
    }
    if (authMessage && authMessage.data) {
      console.log('hapa')
      document.getElementById('username').classList.add('is-valid');
      document.getElementById('password').classList.add('is-valid');
      localStorage.setItem('auth', JSON.stringify(authMessage.data[0]));
      this.props.history.replace('/home');
    }
    return (
      <div className="container d-flex align-items-center justify-content-center">
      <div className="col-lg-5">
          <h2 className="text-center mb-4 mt-5">Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
          </div>
          <div className="text-center text-danger">
            <p className="text" id="message"></p>
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authMessage: state.auth.authMessage,
});

const mapDispatchToProps = dispatch => ({
  signInUser: credentials => dispatch(signInUser(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
