const initialState = {
  category: null,
  sortName: 'rating',
}

const filters = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_SORT':
      return {
        ...state,
        sortName: action.payload,       
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      }
    default:
      return state;
  }
};

export default filters