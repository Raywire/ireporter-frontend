import axios from 'axios';

const configUrls = {
  root: 'https://pure-wildwood-82378.herokuapp.com/api/v2/auth/',
};

export const signInUser = (credentials) => {
  return (dispatch) => {
    return axios.post(`${configUrls.root}login`, credentials)
      .then((response) => {
        dispatch({ type: 'SIGNIN_SUCCESS', response });
        window.location.replace('/');
      })
      .catch((error) => {
        dispatch({ type: 'SIGNIN_ERROR', error: error.response.data });
      });
  };
};

export const signUpUser = (credentials) => {
  return (dispatch) => {
    return axios.post(`${configUrls.root}signup`, credentials)
      .then((response) => {
        dispatch({ type: 'SIGNUP_SUCCESS', response });
      })
      .catch((error) => {
        dispatch({ type: 'SIGNUP_ERROR', error: error.response.data });
      });
  };
};
