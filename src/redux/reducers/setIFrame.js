const iFrameUrl = '';

const setIFrame = (state = { iFrameUrl }, action) => {
  switch (action.type) {
    case 'SETIFRAME':
      return { ...state, iFrameUrl: action.payload };
    default:
      return state;
  }
};

export default setIFrame;
