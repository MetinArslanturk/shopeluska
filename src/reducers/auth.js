const authDefaultState = {
    uid: ''
};

export default (state = authDefaultState, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return {
        ...state,
        uid: action.uid
      };
      case 'SET_LOG_OUT':
        return {
          ...state,
          uid: ''
        };
    default:
      return state;
  }
};