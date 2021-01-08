import { combineReducers } from 'redux';
import getUser from './getUser';
import getCustomer from './getCustomer';
import setIFrame from './setIFrame';
import urls from './getUrls';

const rootReducer = combineReducers({
  user: getUser,
  customer: getCustomer,
  iFrame: setIFrame,
  urls
});

export default rootReducer;
