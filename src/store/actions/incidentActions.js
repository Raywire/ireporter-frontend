import axios from 'axios';
import authHeader from '../../helpers/authHeader';

const configUrls = {
  root: 'https://pure-wildwood-82378.herokuapp.com/api/v2/',
};

export const getRedflags = () => {
  return (dispatch) => {
    const config = {
      headers: authHeader(),
    };
    return axios.get(`${configUrls.root}redflags`, config)
      .then((response) => {
        dispatch({ type: 'GET_REDFLAGS_SUCCESS', response });
      })
      .catch((error) => {
        dispatch({ type: 'GET_REDFLAGS_ERROR', error: error.response.data });
      });
  };
};

export const getIncident = (id) => {
  return (dispatch) => {
    const config = {
      headers: authHeader(),
    };
    return axios.get(`${configUrls.root}redflags/${id}`, config)
      .then((response) => {
        dispatch({ type: 'GET_REDFLAG_SUCCESS', response });
      })
      .catch((error) => {
        dispatch({ type: 'GET_REDFLAG_ERROR', error: error.response.data });
      });
  };
};

export const updateIncidentComment = (id, type, comment) => {
  return (dispatch) => {
    const config = {
      headers: authHeader(),
    };
    return axios.patch(`${configUrls.root}${type}/${id}/comment`, {comment}, config)
      .then((response) => {
        dispatch({ type: 'UPDATE_COMMENT_SUCCESS', response });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_COMMENT_ERROR', error: error.response.data });
      });
  };
};

export const deleteIncident = (id) => {
  return (dispatch) => {
    const config = {
      headers: authHeader(),
    };
    return axios.delete(`${configUrls.root}redflags/${id}`, config)
      .then((response) => {
        dispatch({ type: 'DELETE_REDFLAG_SUCCESS', response });
      })
      .catch((error) => {
        dispatch({ type: 'DELETE_REDFLAG_ERROR', error: error.response.data });
      });
  };
};

export const createIncident = (incident) => {
  return (dispatch) => {
    const config = {
      headers: authHeader(),
    };
    return axios.post(`${configUrls.root}redflags/`, incident, config)
      .then((response) => {
        dispatch({ type: 'CREATE_REDFLAG_SUCCESS', response });
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_REDFLAG_ERROR', error: error.response.data });
      });
  };
};
