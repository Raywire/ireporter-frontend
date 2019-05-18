import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    confirmPassword: '',
    email: '',
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      document.getElementById('password').classList.add('is-invalid');
      document.getElementById('confirmPassword').classList.add('is-invalid');
      return;
    }
    this.props.signUpUser(this.state);
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { authMessage } = this.props;
    const { errorMessage } = this.props;

    if (errorMessage && errorMessage.message.email === 'This key is required and should not be empty or formatted wrongly') {
      document.getElementById('email').classList.add('is-invalid');
    }
    if (errorMessage && errorMessage.message.firstname === 'This key is required and should not be empty or formatted wrongly') {
      document.getElementById('firstname').classList.add('is-invalid');
    }
    if (errorMessage && errorMessage.message.lastname === 'This key is required and should not be empty or formatted wrongly') {
      document.getElementById('lastname').classList.add('is-invalid');
    }
    if (errorMessage && errorMessage.message.username === 'This key is required and should not be empty or formatted wrongly') {
      document.getElementById('username').classList.add('is-invalid');
    }
    if (errorMessage && errorMessage.message.password === 'Password must be at least 6 characters') {
      document.getElementById('password').classList.add('is-invalid');
      document.getElementById('password-text').innerText = errorMessage.message.password;
    }
    if (authMessage && authMessage.message === 'email already exists') {
      document.getElementById('email').classList.add('is-invalid');
      document.getElementById('email-text').innerText = authMessage.message;
    }
    if (authMessage && authMessage.message === 'username already exists') {
      document.getElementById('username').classList.add('is-invalid');
      document.getElementById('username-text').innerText = authMessage.message;
    }
    if (authMessage && authMessage.data) {
      localStorage.setItem('auth', JSON.stringify(authMessage.data[0]));
      this.props.history.replace('/home');
    }

    return (
      <div className="container d-flex align-items-center justify-content-center">
        <div className="col-lg-5">
          <h2 className="text-center mb-4 mt-5">Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstname" placeholder="First Name" onChange={this.handleChange} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastname" placeholder="Last Name" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Username" onChange={this.handleChange} />
                <div className="invalid-feedback" id="username-text" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.handleChange} />
                <div className="invalid-feedback" id="email-text" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
                <div className="invalid-feedback" id="password-text" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange} />
                <div className="invalid-feedback" id="confirm-password-text" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authMessage: state.auth.authMessage,
  errorMessage: state.auth.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  signUpUser: credentials => dispatch(signUpUser(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
