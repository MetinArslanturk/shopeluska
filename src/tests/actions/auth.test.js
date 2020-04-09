import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLogin } from '../../actions/auth';

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