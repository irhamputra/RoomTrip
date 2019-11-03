export const user = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER':
            return action.payload;

        case 'LOGIN':
            return action.payload;

        case 'LOGOUT':
            return (state = {});

        case 'UPDATE_NAME':
            return { ...state, name: action.payload };

        case 'UPDATE_PAYPAL':
            return { ...state, paypal: action.payload };

        case 'SAVE_PROFILE':
            return state;

        case 'SAVE_PAYPAL':
            return state;

        case 'UPDATE_EMAIL':
            return { ...state, email: action.payload };

        case 'UPDATE_PASSWORD':
            return { ...state, password: action.payload };

        case 'UPDATE_PHONE_NUMBER':
            return { ...state, phoneNumber: action.payload };

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
