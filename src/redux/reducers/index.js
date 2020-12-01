import { combineReducers } from 'redux';
import getCustomerReducer from './getCustomer';

const rootReducer = combineReducers({
  getCustomer: getCustomerReducer
});

export default rootReducer;
