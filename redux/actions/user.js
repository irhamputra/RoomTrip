import firebase from 'firebase';
import db from '../../config/firebase';
import { AsyncStorage } from 'react-native';

export const updateEmail = email => {
    return { type: 'UPDATE_EMAIL', payload: email };
};

export const updatePassword = password => {
    return { type: 'UPDATE_PASSWORD', payload: password };
};

export const updateName = fullName => {
    return { type: 'UPDATE_NAME', payload: fullName };
};

export const updatePayPal = paypalMail => {
    return { type: 'UPDATE_PAYPAL', payload: paypalMail };
};

export const updatePhoneNumber = phoneNumber => {
    return { type: 'UPDATE_PHONE_NUMBER', payload: phoneNumber };
};

export const saveProfile = () => {
    return async (dispatch, getState) => {
        try {
            const { email, name, phoneNumber, uid, photoURL } = getState().user;
            const res = await db
                .collection('users')
                .doc(uid)
                .update({
                    email,
                    name,
                    phoneNumber,
                    photoURL
                });
            console.log(res);
            dispatch({ type: 'SAVE_PROFILE' });
        } catch (e) {}
    };
};

export const savePayPal = () => {
    return async (dispatch, getState) => {
        try {
            const { paypal, uid } = getState().user;

            const res = await db
                .collection('users')
                .doc(uid)
                .update({
                    paypal
                });

            console.log(res);
            dispatch({ type: 'SAVE_PAYPAL' });
        } catch (e) {
            alert(e);
        }
    };
};

const _storeData = async token => {
    try {
        await AsyncStorage.setItem('token', `${token}`);
    } catch (e) {
        alert(e);
    }
};

export const getUser = uid => {
    return async dispatch => {
        try {
            const user = await db
                .collection('users')
                .doc(uid)
                .get();
            const documentSnapshot = user.exists;
            if (documentSnapshot) {
                dispatch({ type: 'GET_USER', payload: user.data() });
            }
        } catch (e) {
            alert('User not found');
        }
    };
};

export const login = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user;
            const res = await firebase.auth().signInWithEmailAndPassword(email, password);
            await _storeData(res.user.refreshToken);
            dispatch({
                type: 'LOGIN',
                payload: getUser(res.user.uid)
            });
        } catch (e) {
            alert('Email and password are not match');
        }
    };
};

export const signUp = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password, name } = getState().user;
            const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log(res);

            if (res.user.uid) {
                const newUser = {
                    uid: res.user.uid,
                    token: res.user.refreshToken,
                    email,
                    photoURL: '',
                    name,
                    phoneNumber: null,
                    paypal: null
                };

                db.collection('users')
                    .doc(newUser.uid)
                    .set(newUser)
                    .then(data => console.log(data));

                dispatch({
                    type: 'LOGIN',
                    payload: getUser(res.user.uid)
                });
            }
        } catch (e) {
            alert(e);
        }
    };
};

export const logout = () => {
    return async dispatch => {
        await firebase.auth().signOut();
        dispatch({ type: 'LOGOUT' });
    };
};
