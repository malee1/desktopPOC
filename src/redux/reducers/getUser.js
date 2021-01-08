import data from '../../constants/user';

const getUser = (state = { data }, action) => {
  switch (action.type) {
    case 'GETUSER':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default getUser;
