export const room = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_TITLE':
            return { ...state, title: action.payload };

        case 'UPDATE_ADDRESS':
            return { ...state, address: action.payload };

        case 'UPDATE_GUEST':
            return { ...state, guest: action.payload };

        case 'UPDATE_DESCRIPTION':
            return { ...state, description: action.payload };

        case 'UPLOAD_PHOTO':
            return { ...state, photoURL: action.payload };

        case 'UPDATE_BLOB':
            return { ...state, blob: action.payload };

        case 'CANCEL_ADD_ROOM':
            return (state = {});

        case 'SAVE_ROOM':
            return state;

        default:
            return state;
    }
};
