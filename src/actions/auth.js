const setLoggedIn = (uid) => ({
    type: 'SET_LOGGED_IN',
    uid: uid
})

export const startLogin = () => {
    return (dispatch) => {
        // login stuff
        dispatch(setLoggedIn('a123'));
    }
}