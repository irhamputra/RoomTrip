import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import firebase from 'firebase';
import { styles } from './Home';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/actions/user';
import { getAllRooms } from '../redux/actions/rooms';

const Loading = ({ navigation }) => {
    const dispatch = useDispatch();
    const dispatchGetUser = async uid => await dispatch(getUser(uid));
    const dispatchGetAllRooms = () => dispatch(getAllRooms());

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                dispatchGetAllRooms();
                navigation.navigate('Auth');
            } else {
                dispatchGetUser(user.uid)
                    .then(() => {
                        dispatchGetAllRooms();
                    })
                    .finally(() => navigation.navigate('Home'));
            }
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <ActivityIndicator size="large" />
                <Text>Please wait!</Text>
                <Text>we are doing some magic...</Text>
            </View>
        </View>
    );
};

export default Loading;
