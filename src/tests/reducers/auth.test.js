import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
            type: 'SET_LOGGED_IN',
            uid: 'a123'
        };
    const state = authReducer({uid: ''}, action);
    expect(state.uid).toBe(action.uid);
});


test('should set empty string uid for logout', () => {
    const action = {
            type: 'SET_LOG_OUT',
            uid: 'a123'
        };
    const state = authReducer({uid: 'a124'}, action);
    expect(state.uid).toBe('');
});