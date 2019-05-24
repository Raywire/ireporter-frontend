import { combineReducers } from 'redux';
import authReducer from './authReducer';
import incidentReducer from './incidentReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  incidents: incidentReducer,
});

export default rootReducer;
