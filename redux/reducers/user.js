export const user = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER':
            return action.payload;

        case 'LOGIN':
            return action.payload;

        case 'LOGOUT':
            return (state = {});

        case 'REGISTER_USER':
            return { ...state, registerUser: action.payload };

        case 'UPDATE_NAME':
            return { ...state, name: action.payload };

        case 'UPDATE_PAYPAL':
            return { ...state, paypal: action.payload };

        case 'UPLOAD_PROFILE_PICTURE':
            return { ...state, photoURL: action.payload };

        case 'UPDATE_BLOB_USER':
            return { ...state, blobUser: action.payload };

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
