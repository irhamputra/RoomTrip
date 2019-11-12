import db, { storage } from '../../config/firebase';
import { imageBaseURL } from '../../constants/imageURL';

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

const getRoomID = id => {
    return { type: 'GET_SINGLE_ROOM', payload: id };
};

export const saveRoom = () => {
    return async (dispatch, getState) => {
        try {
            const { title, address, guest, price, description, city, blob } = getState().room;
            const { uid } = getState().user;

            if (blob) {
                const ref = await storage.ref().child(`images/rooms/${uid}/room-${uid}`);
                const result = await ref.put(blob);
                const { fullPath } = await ref.getMetadata();
                const encodeURL = encodeURIComponent(fullPath);
                const newRoomURL = `${imageBaseURL}${encodeURL}?alt=media`;

                if (result.state === 'success') {
                    const newRoom = {
                        id: uid,
                        title,
                        address,
                        guest,
                        city,
                        price,
                        description,
                        photoURL: newRoomURL,
                        verified: false
                    };

                    const res = await db
                        .collection('rooms')
                        .doc(uid)
                        .set(newRoom);

                    console.log(res);
                    dispatch({
                        type: 'ADD ROOM'
                    });
                }
            }
        } catch (e) {
            console.log(e);
        }
    };
};
