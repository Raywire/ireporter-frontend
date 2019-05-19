import axios from 'axios';
import authHeader from '../../helpers/authHeader';

const configUrls = {
  root: 'https://pure-wildwood-82378.herokuapp.com/api/v2/',
};

const config = {
    headers: authHeader(),
  };

export const getRedflags = () => {
  return (dispatch) => {
    return axios.get(`${configUrls.root}redflags`, config)
      .then((response) => {
        dispatch({ type: 'GET_REDFLAGS_SUCCESS', response });
      })
      .catch((error) => {
          console.log(error.response)
        dispatch({ type: 'GET_REDFLAGS_ERROR', error: error.response.data });
      });
  };
};

export const getRedflag = (id) => {
  return (dispatch) => {
    return axios.get(`${configUrls.root}redflags/${id}`, config)
      .then((response) => {
        dispatch({ type: 'GET_REDFLAG_SUCCESS', response });
      })
      .catch((error) => {
          console.log(error.response)
        dispatch({ type: 'GET_REDFLAG_ERROR', error: error.response.data });
      });
  };
};
