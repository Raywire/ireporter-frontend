const initState = {
    incidents: [],
    incident: [],
    createdIncident: [],
    errorMessage: null,
    incidentMessage: null,
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
        const response = action.response.data;
        if (response && response.message) {
          return {
            ...state,
            incidentMessage: response
          }
        }
        return {
          ...state,
          incident: action.response.data.data[0],
        };
      case 'GET_REDFLAG_ERROR':
        return {
          ...state,
          errorMessage: action.error,
        };
      case 'DELETE_REDFLAG_SUCCESS':
        return {
          ...state,
          deleteMessage: action.response.data.data,
        };
      case 'DELETE_REDFLAG_ERROR':
        return {
          ...state,
          errorMessage: action.error,
        };        
      case 'CREATE_REDFLAG_SUCCESS':
        return {
          ...state,
          createdIncident: action.response.data.data[0],
        };
      case 'CREATE_REDFLAG_ERROR':
        return {
          ...state,
          errorMessage: action.error,
        };
      case 'UPDATE_COMMENT_SUCCESS':
        return {
          ...state,
          incidentMessage: action.response.data.data[0],
        };
      case 'UPDATE_COMMENT_ERROR':
        return {
          ...state,
          errorMessage: action.error,
        };        
      default:
        return state;
    }
  };
  
  export default incidentReducer;
  