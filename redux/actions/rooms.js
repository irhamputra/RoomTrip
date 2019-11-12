import firebase from 'firebase';
import db from '../../config/firebase';

export const getAllRooms = () => {
    return async dispatch => {
        try {
            let res = [];
            const snapshot = await db.collection('rooms').get();
            await snapshot.forEach(room => {
                res.push({
                    id: room.id,
                    ...room.data()
                });
            });

            await dispatch({ type: 'GET_ALL_ROOMS', payload: res });
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
