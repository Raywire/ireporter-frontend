const initState = {
    incidents: [],
    incident: [],
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
          errorMessage: action.error,
        };
      case 'GET_REDFLAG_SUCCESS':
      console.log(action.response.data.data[0])
        return {
          ...state,
          incident: action.response.data.data[0],
        };
      case 'GET_REDFLAG_ERROR':
        return {
          ...state,
          errorMessage: action.error,
        };        
      default:
        return state;
    }
  };
  
  export default incidentReducer;
  