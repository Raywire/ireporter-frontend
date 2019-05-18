import axios from 'axios';

const configUrls = {
  root: 'https://pure-wildwood-82378.herokuapp.com/api/v2/auth/',
};

export const signInUser = (credentials) => {
  return (dispatch) => {
    return axios.post(`${configUrls.root}login`, credentials)
      .then((response) => {
          console.log(response)
        dispatch({ type: 'SIGNIN_SUCCESS', response });
      })
      .catch((error) => {
        dispatch({ type: 'SIGNIN_ERROR', error: error.response.data });
      });
  };
};
