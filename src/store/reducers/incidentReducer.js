const initState = {
    incidents: [],
    errorMessage: null,
  };
  
  const incidentReducer = (state = initState, action) => {
    switch (action.type) {
      case 'GET_REDFLAGS_SUCCESS':
        return {
          ...state,
          incidents: action.response.data.data,
        };
      case 'GET_REDFLAGS_ERROR':
        return {
          ...state,
        };
      default:
        return state;
    }
  };
  
  export default incidentReducer;
  