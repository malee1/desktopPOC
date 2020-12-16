import { combineReducers } from 'redux';
import getCustomer from './getCustomer';
import getUrl from './getURL';

const rootReducer = combineReducers({
  customer: getCustomer,
  iFrame: getUrl
});

export default rootReducer;
