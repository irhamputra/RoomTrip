export const user = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER':
            return action.payload;

        case 'LOGIN':
            return action.payload;

        case 'LOGOUT':
            return (state = {});

        case 'UPDATE_EMAIL':
            return { ...state, email: action.payload };

        case 'UPDATE_NAME':
            return { ...state, name: action.payload };

        case 'UPDATE_PASSWORD':
            return { ...state, password: action.payload };

        default:
            return state;
    }
};

export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};
