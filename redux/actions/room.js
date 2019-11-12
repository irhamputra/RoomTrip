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

export const cleanStateSingleRoom = () => {
    return { type: 'CLEAN_STATE_SINGLE_ROOM' };
};

export const getSingleRoom = id => {
    return async dispatch => {
        try {
            const snapshot = await db
                .collection('rooms')
                .doc(id)
                .get();

            dispatch({ type: 'GET_SINGLE_ROOM', payload: snapshot.data() });
        } catch (e) {
            alert(e);
        }
    };
};

export const saveRoom = () => {
    return async (dispatch, getState) => {
        try {
            const { title, address, guest, price, description, city, blob, zipCode, photoURL } = getState().room;
            const { uid } = getState().user;

            if (blob) {
                const ref = await storage.ref().child(`images/rooms/${uid}/room-${uid}`);
                const result = await ref.put(blob);
                const { fullPath } = await ref.getMetadata();
                const encodeURL = encodeURIComponent(fullPath);
                const newRoomURL = `${imageBaseURL}${encodeURL}?alt=media`;

                const newRoom = {
                    id: uid,
                    title,
                    address,
                    zipCode,
                    guest,
                    city,
                    price,
                    description,
                    photoURL: newRoomURL,
                    verified: false
                };

                if (result.state === 'success') {
                    // if photoURL include http is old photos
                    if (photoURL.includes('https://firebasestorage')) {
                        const res = await db
                            .collection('rooms')
                            .doc(uid)
                            .update(newRoom);
                        console.log(res);
                        dispatch({ type: 'UPDATE_OLD_PHOTO' });
                    } else {
                        const res = await db
                            .collection('rooms')
                            .doc(uid)
                            .set(newRoom);

                        console.log(res);
                        await dispatch({ type: 'ADD ROOM' });
                    }
                }
            } else {
                const updateRoom = {
                    id: uid,
                    title,
                    address,
                    zipCode,
                    guest,
                    city,
                    price,
                    description,
                    photoURL,
                    verified: false
                };
                const res = await db
                    .collection('rooms')
                    .doc(uid)
                    .update(updateRoom);

                console.log(res);
                await dispatch({ type: 'UPDATE_ROOM_WITHOUT_BLOB' });
            }
        } catch (e) {
            console.log(e);
        }
    };
};
