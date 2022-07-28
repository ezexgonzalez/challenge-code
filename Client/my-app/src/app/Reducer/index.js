

const initialState = {
    texts: [],
    error: null
}


function rootReducer(state = initialState, action) {

    if (action.type === "GET_INVERTED_TEXT") {

        return {
            ...state,
            texts: [action.payload, ...state.texts]
        }
    }
    if (action.type === "GET_INVERTED_TEXT_ERROR") {
        return {
            ...state,
            error: action.payload
        }
    }
    if (action.type === "CLEAN_ERROR") {
        return {
            ...state,
            error: action.payload
        }
    }

    return state;
}

export default rootReducer;