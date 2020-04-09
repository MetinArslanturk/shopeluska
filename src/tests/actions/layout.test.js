import {showSidebar, hideSidebar} from '../../actions/layout';


test('should generate show sidebar action', () => {
    const action = showSidebar();
    expect(action).toEqual({
        type: 'SHOW_SIDEBAR'
    });
});

test('should generate hide sidebar action', () => {
    const action = hideSidebar();
    expect(action).toEqual({
        type: 'HIDE_SIDEBAR'
    });
});