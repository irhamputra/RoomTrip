import db, { storage } from '../../config/firebase';

export const updateTitle = title => {
    return { type: 'UPDATE_TITLE', payload: title };
};

export const updateAddress = address => {
    return { type: 'UPDATE_ADDRESS', payload: address };
};

export const updateZIPCode = zipCode => {
    return { type: 'UPDATE_ZIP_CODE', payload: zipCode };
};

export const updateCity = city => {
    return { type: 'UPDATE_CITY', payload: city };
};

export const updateGuest = guest => {
    return { type: 'UPDATE_GUEST', payload: guest };
};

export const updateDescription = description => {
    return { type: 'UPDATE_DESCRIPTION', payload: description };
};

export const updatePrice = price => {
    return { type: 'UPDATE_PRICE', payload: price };
};

export const uploadPhoto = photo => {
    return { type: 'UPLOAD_PHOTO', payload: photo };
};

export const updateBlob = blob => {
    return { type: 'UPDATE_BLOB', payload: blob };
};

export const cancelAddRoom = () => {
    return { type: 'CANCEL_ADD_ROOM' };
};

export const saveRoom = () => {
    return async (dispatch, getState) => {
        try {
            const { title, address, guest, price, description, blob } = getState().room;
            const { uid } = getState().user;

            const response = await storage.ref().child('images/');

            const newRoom = {
                title,
                address,
                guest,
                price,
                description
            };

            const res = await db.collection('rooms').doc();
        } catch (e) {
            console.log(e);
        }
    };
};
