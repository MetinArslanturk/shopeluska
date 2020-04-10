import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLogin, startLogout } from '../../actions/auth';

const defaultAuthState = { auth: { uid: 'aaa' } };
const createMockStore = configureMockStore([thunk]);

test('should start login', () => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startLogin());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'SET_LOGGED_IN',
        uid: 'a123'
    });
});


test('should start log out', () => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startLogout());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'SET_LOG_OUT'
    });
});