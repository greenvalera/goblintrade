const initialState = {
    user: {
        firstName: null,
        lastName: null,
    },
    validationErrors: {
        email: "",
    }
};

export const authReducer = (state = initialState, action) => {
    return state;
};

export default authReducer;