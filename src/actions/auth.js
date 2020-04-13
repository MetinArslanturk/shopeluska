const setLoggedIn = (user) => ({
    type: 'SET_LOGGED_IN',
    user: user
});

const setLoggedOut = () => ({
    type: 'SET_LOG_OUT'
});

export const startLogin = () => {
    return (dispatch) => {
        // login stuff
        dispatch(setLoggedIn({uid:'a123', username:'Metin'}));
    }
}

export const startLogout = () => {
    return (dispatch) => {
        dispatch(setLoggedOut());
    }
}