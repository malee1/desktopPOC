import iFrameUrl from '../../constants/iFrameUrl';

const getUrl = (state = { iFrameUrl }, action) => {
  switch (action.type) {
    case 'GETURL':
      return { ...state, iFrameUrl: action.payload };
    default:
      return state;
  }
};

export default getUrl;
