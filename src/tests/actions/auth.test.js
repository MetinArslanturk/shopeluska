import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLogin, startLogout, checkLogin, startUpdateMyProfile } from '../../actions/auth';

const defaultAuthState = { auth: { user: {uid: 'aaa' }} };
const createMockStore = configureMockStore([thunk]);

test('should start login', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startLogin({email: 'admin@test.com', password: '123456'})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_LOGGED_IN',
            user: {uid: expect.any(String), username: 'admin', isA: true, email: 'admin@test.com'}
        });
        done();
    });
    

});


test('should check login', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(checkLogin()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_LOGGED_IN',
            user: {uid: expect.any(String), username: 'admin', isA: true, email: 'admin@test.com'}
        });
        done();
    });

});

test('should start update profile', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startUpdateMyProfile({username: 'admin'})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'UPDATE_MY_PROFILE',
            user: {uid: expect.any(String), username: 'admin', isA: true, email: 'admin@test.com'}
        });
        done();
    });

});

test('should start log out', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startLogout()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_LOG_OUT'
        });
        done();
    });

});