const authDefaultState = {
    user: {uid:''},
    redirectUrl: ''
};

export default (state = authDefaultState, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return {
        ...state,
        user: action.user
      };
      case 'UPDATE_MY_PROFILE':
        return {
          ...state,
          user: action.user
        };
      case 'SET_LOG_OUT':
        return {
          ...state,
          user: {uid:''}
        };
        case 'SET_LOGIN_REDIRECT_URL':
          return {
            ...state,
            redirectUrl: action.redirectUrl
          };
    default:
      return state;
  }
};