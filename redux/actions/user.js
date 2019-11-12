import firebase from 'firebase';
import db, { storage } from '../../config/firebase';
import { AsyncStorage } from 'react-native';
import { imageBaseURL } from '../../constants/imageURL';

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

export const updateProfilePicture = uri => {
    return { type: 'UPLOAD_PROFILE_PICTURE', payload: uri };
};

export const updateBlobUser = blob => {
    return { type: 'UPDATE_BLOB_USER', payload: blob };
};

export const register = (fullName, email, password, confirmPassword) => {
    return { type: 'REGISTER_USER', payload: { fullName, email, password, confirmPassword } };
};

export const saveProfile = () => {
    return async (dispatch, getState) => {
        try {
            const { email, name, phoneNumber, uid, blobUser, photoURL } = getState().user;
            // define ref to profile
            const ref = await storage.ref().child(`images/profile/${uid}`);
            // put blob to ref
            const result = await ref.put(blobUser);
            // get metadata fullPatch
            const { fullPath } = await ref.getMetadata();
            // encode URL fullPatch
            const encodeURL = encodeURIComponent(fullPath);
            // create new photo URL
            const newPhotoURL = `${imageBaseURL}${encodeURL}?alt=media`;

            // TODO: in update photo should check old photo first refer to uid, delete
            // if success update photoURL with new otherwise dont update
            if (result.state === 'success') {
                await db
                    .collection('users')
                    .doc(uid)
                    .update({
                        email,
                        name,
                        phoneNumber,
                        photoURL: newPhotoURL
                    });
            } else {
                alert('Ouch, something bad happened. Try it again later!');
                await db
                    .collection('users')
                    .doc(uid)
                    .update({
                        email,
                        name,
                        phoneNumber,
                        photoURL
                    });
            }

            // should dispatch save profile
            console.log('dispatch save profile');
            dispatch({ type: 'SAVE_PROFILE' });
        } catch (e) {
            console.error(e);
        }
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
            const documentSnapshot = await user.exists;
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
            const {
                registerUser: { fullName, email, password, confirmPassword }
            } = getState().user;

            if (password === confirmPassword) {
                const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
                console.log(res);

                if (res.user.uid) {
                    const newUser = {
                        uid: res.user.uid,
                        token: res.user.refreshToken,
                        email,
                        photoURL: '',
                        fullName,
                        phoneNumber: '',
                        paypal: ''
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
            } else {
                alert('your password do not match');
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
