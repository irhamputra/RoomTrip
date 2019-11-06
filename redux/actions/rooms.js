import firebase from 'firebase';
import db from '../../config/firebase';

export const getAllRooms = () => {
    return async dispatch => {
        try {
            const snapshot = await db.collection('rooms').get();
            const rooms = await snapshot.forEach(room => {
                return [...room.data()];
            });

            const documentSnapshot = snapshot.exists;
            if (documentSnapshot) {
                dispatch({ type: 'GET_ALL_ROOMS', payload: rooms });
            }
        } catch (e) {
            alert(e);
        }
    };
};

export const getSingleRoom = id => {
    return async dispatch => {
        try {
            const snapshot = await db
                .collection('rooms')
                .doc(id)
                .get();

            const documentSnapshot = await snapshot.exists;

            if (documentSnapshot) {
                dispatch({ type: 'GET_SINGLE_ROOM', payload: snapshot.data() });
            }
        } catch (e) {
            alert(e);
        }
    };
};

export const getLikedRoom = () => {
    return async (dispatch, getState) => {
        try {
            const { uid } = getState().user;
            const user = await db
                .collection('users')
                .doc(uid)
                .get();
            console.log(user);
            dispatch({ type: 'GET_LIKE_ROOM', payload: user.data().likeRoom });
        } catch (e) {
            alert(e);
        }
    };
};

export const saveLikeRoom = () => {
    return async (dispatch, getState) => {
        try {
            const { uid } = getState().user;
            const { likedRoom } = getState().rooms;
            const userLikeRoom = await db
                .collection('users')
                .doc(uid)
                .update({
                    likedRoom
                });

            dispatch({ type: 'SAVE_LIKE_ROOM' });
        } catch (e) {}
    };
};

export const deleteLikeRoom = id => {
    return async (dispatch, getState) => {
        try {
            const { uid } = getState().user;
            const snapshot = await db
                .collection('users')
                .doc(uid)
                .update({
                    likedRoom: firebase.firestore.FieldValue.arrayRemove(id)
                });
            dispatch({ type: 'DELETE_LIKE_ROOM', payload: getLikedRoom() });
            console.log(snapshot);
        } catch (e) {
            alert(e);
        }
    };
};

export const likeRoom = id => {
    return { type: 'ADD_LIKE_ROOM', payload: id };
};
