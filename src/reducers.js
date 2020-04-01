export const myReducer = (state = {namedValue: ''}, action) => {
    switch (action.type) {
        case 'SET':
            return {...state, namedValue: action.payload}
        default:
            return state;
    }
}