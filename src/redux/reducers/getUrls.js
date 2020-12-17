import urls from '../../constants/initilUrls';

const getUrls = (state = { urls }, action) => {
  switch (action.type) {
    case 'GETURLS':
      return { ...state, urls: action.payload };
    default:
      return state;
  }
};

export default getUrls;
