const initialState = {
    allRooms: [],
    singleRoom: {},
};

export const rooms = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_ROOMS':
            return { ...state, allRooms: action.payload };

        case 'GET_SINGLE_ROOM':
            return { ...state, singleRoom: action.payload };

        default:
            return state;
    }
};
