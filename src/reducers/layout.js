const layoutDefaultState = {
    showSidebar: true,
};

export default (state = layoutDefaultState, action) => {
    switch (action.type) {
        case 'SHOW_SIDEBAR':
            return {
                ...state,
                showSidebar: true,
            };
        case 'HIDE_SIDEBAR':
            return {
                ...state,
                showSidebar: false,
            };
        default:
            return state;
    }
};
