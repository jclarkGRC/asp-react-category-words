const receiveCategories = 'RECEIVE_CATEGORIES';
const incrementId = 'INCREMENT_ID';
const initialState = {
    id: 0,
    categories: []
};

export const actionCreators = {
    incrementId: () => ({type: incrementId}),
    requestCategories: () => async (dispatch) => {

        const url = `api/GameCategories/Categories`;
        const response = await fetch(url);
        const categories = await response.json();

        dispatch({type: receiveCategories, categories})

    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === incrementId) {
        return { ...state, id: state.id + 1}
    }

    if (action.type === receiveCategories) {
        return {
            ...state,
            categories: action.categories
        }
    }

    return state;
};