import user from '../../constants/user';

const getUser = (state = user, action) => {
  switch (action.type) {
    case 'GETUSER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default getUser;
