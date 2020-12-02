import { combineReducers } from 'redux';
import getCustomerReducer from './getCustomer';

const rootReducer = combineReducers({
  customer: getCustomerReducer
});

export default rootReducer;
