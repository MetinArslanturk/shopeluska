import authReducer from '../../reducers/auth';

test('should set user for login', () => {
    const action = {
        type: 'SET_LOGGED_IN',
        user: { uid: 'a123' },
    };
    const state = authReducer({ user: { uid: '' } }, action);
    expect(state.user).toEqual(action.user);
});

test('should set user for update profile', () => {
    const action = {
        type: 'UPDATE_MY_PROFILE',
        user: { uid: 'a124' },
    };
    const state = authReducer({ user: { uid: '' } }, action);
    expect(state.user).toEqual(action.user);
});

test('should set empty string uid for logout', () => {
    const action = {
        type: 'SET_LOG_OUT',
    };
    const state = authReducer({ uid: 'a124' }, action);
    expect(state.user).toEqual({ uid: '' });
});

test('should set login redirect url', () => {
    const action = {
        type: 'SET_LOGIN_REDIRECT_URL',
        redirectUrl: 'test123',
    };
    const state = authReducer({ redirectUrl: '' }, action);
    expect(state.redirectUrl).toEqual(action.redirectUrl);
});
