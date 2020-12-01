const getCustomer = (customer) => {
  return {
    type: 'GETCUSTOMER',
    payload: customer
  };
};

export default getCustomer;
