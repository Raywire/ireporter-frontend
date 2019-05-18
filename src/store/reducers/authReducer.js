const initState = {
  authMessage: null,
  errorMessage: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        authMessage: action.response.data,
      };
    case 'SIGNIN_ERROR':
      return {
        ...state,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authMessage: action.response.data,
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

export default authReducer;
