import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import firebase from 'firebase';
import { styles } from './Home';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/actions/user';

const Loading = ({ navigation }) => {
    const dispatch = useDispatch();
    const dispatchGetUser = uid => dispatch(getUser(uid));

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                navigation.navigate('Auth');
            } else {
                dispatchGetUser(user.uid);
                navigation.navigate('Home');
            }
        });
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
            <Text>Loading...</Text>
        </View>
    );
};

export default Loading;
