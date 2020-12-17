import { combineReducers } from 'redux';
import getCustomer from './getCustomer';
import setIFrame from './setIFrame';

const rootReducer = combineReducers({
  customer: getCustomer,
  iFrame: setIFrame
});

export default rootReducer;
