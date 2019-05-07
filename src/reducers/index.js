import { combineReducers } from 'redux';
import ContactReducer from './reducers/contactReducer';

export default combineReducers({
  contact: ContactReducer
});
