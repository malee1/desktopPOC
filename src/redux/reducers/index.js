import { combineReducers } from 'redux';
import getCustomer from './getCustomer';
import setIFrame from './setIFrame';
import urls from './getUrls';

const rootReducer = combineReducers({
  customer: getCustomer,
  iFrame: setIFrame,
  urls
});

export default rootReducer;
