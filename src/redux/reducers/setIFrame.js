import url from '../../constants/urls';

const iFrameUrl = url.buttonOne.url;

const setIFrame = (state = { iFrameUrl }, action) => {
  switch (action.type) {
    case 'SETIFRAME':
      return { ...state, iFrameUrl: action.payload };
    default:
      return state;
  }
};

export default setIFrame;
