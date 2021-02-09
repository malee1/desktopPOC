import { combineReducers } from 'redux';
import getUser from './getUser';
import getCustomer from './getCustomer';
import setIFrame from './setIFrame';
import urls from './getUrls';
import setAccessibility from './setAccessibility';

const rootReducer = combineReducers({
  user: getUser,
  customer: getCustomer,
  iFrame: setIFrame,
  urls,
  accessibility: setAccessibility
});

export default rootReducer;
