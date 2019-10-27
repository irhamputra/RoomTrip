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
            dispatch({ type: 'GET_USER', payload: user.data() });
        } catch (e) {}
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
                    name
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
