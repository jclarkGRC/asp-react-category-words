const receiveCategories = 'RECEIVE_CATEGORIES';
const saveCurrentCategory = 'SAVE_CURRENT_CATEGORY';
const initialState = {
    categories: [],
    currentCategory: "",
};

export const actionCreators = {
    requestCategories: () => async (dispatch) => {

        const url = `api/GameCategories/Categories`;
        const response = await fetch(url);
        const categories = await response.json();

        dispatch({ type: receiveCategories, categories })
    },
    saveCurrentCategory: (currentCategory) => (dispatch) => {
        dispatch({ type: saveCurrentCategory, currentCategory })
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === receiveCategories) {
        return {
            ...state,
            categories: action.categories
        }
    }
    if (action.type === saveCurrentCategory) {
        return {
            ...state,
            currentCategory: action.currentCategory
        }
    }

    return state;
};