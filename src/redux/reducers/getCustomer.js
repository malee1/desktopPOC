const getCustomerReducer = (state = { customer: { name: '' } }, action) => {
  switch (action.type) {
    case 'GETCUSTOMER':
      return { ...state, customer: action.payload };
    default:
      return state;
  }
};

export default getCustomerReducer;
