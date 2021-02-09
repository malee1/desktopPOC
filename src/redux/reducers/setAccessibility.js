const accessibility = false;

const setAccessibility = (state = { accessibility }, action) => {
  switch (action.type) {
    case 'SETACCESSIBILITY':
      return { ...state, accessibility: action.payload };
    default:
      return state;
  }
};

export default setAccessibility;
