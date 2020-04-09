import layoutReducer from '../../reducers/layout';
import {showSidebar, hideSidebar} from '../../actions/layout';

test('should set showSidebar true', () => {
    const action = showSidebar();
    const state = layoutReducer({showSidebar: true}, action);
    expect(state.showSidebar).toBe(true);
});

test('should set showSidebar false', () => {
    const action = hideSidebar();
    const state = layoutReducer({showSidebar: true}, action);
    expect(state.showSidebar).toBe(false);
});
