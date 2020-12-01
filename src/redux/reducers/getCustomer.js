const getCustomerReducer = (state = 0, action) => {
  switch (action.type) {
    case 'GETCUSTOMER':
      return state + action.payload;
    default:
      return state;
  }
};

export default getCustomerReducer;
