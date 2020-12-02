// eslint-disable-next-line import/prefer-default-export
export const getCustomer = (custObject) => {
  return {
    type: 'GETCUSTOMER',
    payload: custObject
  };
};
