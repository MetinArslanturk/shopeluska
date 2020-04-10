const setLoggedIn = (uid) => ({
    type: 'SET_LOGGED_IN',
    uid: uid
});

const setLoggedOut = () => ({
    type: 'SET_LOG_OUT'
});

export const startLogin = () => {
    return (dispatch) => {
        // login stuff
        dispatch(setLoggedIn('a123'));
    }
}

export const startLogout = () => {
    return (dispatch) => {
        dispatch(setLoggedOut());
    }
}