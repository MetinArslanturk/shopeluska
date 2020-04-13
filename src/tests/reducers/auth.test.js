import authReducer from '../../reducers/auth';

test('should set user for login', () => {
    const action = {
            type: 'SET_LOGGED_IN',
            user: {uid: 'a123'}
        };
    const state = authReducer({user: {uid: ''}}, action);
    expect(state.user).toEqual(action.user);
});


test('should set empty string uid for logout', () => {
    const action = {
            type: 'SET_LOG_OUT'
        };
    const state = authReducer({uid: 'a124'}, action);
    expect(state.user).toEqual({uid:''});
});