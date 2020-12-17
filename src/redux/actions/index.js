// eslint-disable-next-line import/prefer-default-export
export const getCustomer = (custObject) => {
  return {
    type: 'GETCUSTOMER',
    payload: custObject
  };
};

export const setIFrame = (url) => {
  return {
    type: 'SETIFRAME',
    payload: url
  };
};
