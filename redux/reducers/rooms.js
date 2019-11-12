const initialState = {
    allRooms: [],
};

export const rooms = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_ROOMS':
            return { ...state, allRooms: action.payload };

        default:
            return state;
    }
};
