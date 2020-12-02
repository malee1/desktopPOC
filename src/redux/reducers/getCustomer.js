import data from '../../constants/customerTemplate';

const getCustomerReducer = (state = { data }, action) => {
  switch (action.type) {
    case 'GETCUSTOMER':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default getCustomerReducer;
