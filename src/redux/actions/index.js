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

export const getUrls = (urls) => {
  return {
    type: 'GETURLS',
    payload: urls
  };
};

export const getUser = (user) => {
  return {
    type: 'GETUSER',
    payload: user
  };
};

export const setAccessibility = (accessibility) => {
  return {
    type: 'SETACCESSIBILITY',
    payload: accessibility
  };
};
