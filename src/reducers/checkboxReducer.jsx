const initialState = {
    checkboxValue: false
};

const checkboxReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CHECKBOX_VALUE':
            return {
                ...state,
                checkboxValue: action.payload
            };
        default:
            return state;
    }
};

export default checkboxReducer;