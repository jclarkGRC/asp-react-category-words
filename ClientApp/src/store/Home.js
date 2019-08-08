const incrementId = 'INCREMENT_ID';
const initialState = { id: 0 };

export const actionCreators = {
    incrementId: () => ({type: incrementId})
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === incrementId) {
        return { ...state, id: state.id + 1}
    }

    return state;
};