const initState = {
  authMessage: null,
  errorMessages: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      // localStorage.setItem('user', JSON.stringify(action.response.data.user));
      return {
        ...state,
        authMessage: action.response.data,
      };
    case 'SIGNIN_ERROR':
      return {
        ...state,
        // authError: action.err.response.data.errors.error[0],
      };
    default:
      return state;
  }
};

export default authReducer;
