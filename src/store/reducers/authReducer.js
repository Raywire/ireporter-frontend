const initState = {
  authMessage: null,
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
    default:
      return state;
  }
};

export default authReducer;
