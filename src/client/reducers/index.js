import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducers from './usersReducer';

export default combineReducers({
  auth: authReducer,
  users: usersReducers,
});
