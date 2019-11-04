import React from 'react';
import { View, AsyncStorage, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Button, ListItem } from 'react-native-elements';
import { logout } from '../redux/actions/user';
import AccountProfile from '../src/components/AccountProfile';
import Landlord from '../src/components/Landlord';
import OtherLists from '../src/components/OtherLists';
import PaypalAccount from '../src/components/PaypalAccount';

const Profile = ({ navigation }) => {
    const dispatch = useDispatch();
    const dispatchLogout = () => dispatch(logout());

    return (
        <ScrollView style={{ flex: 1 }}>
            <AccountProfile />
            <Landlord />
            <PaypalAccount />
            <OtherLists />
            <Button
                type="clear"
                containerStyle={{ marginVertical: 15 }}
                titleStyle={{ color: 'red' }}
                onPress={async () => {
                    dispatchLogout();
                    await AsyncStorage.removeItem('token', () => console.log('Remove token'));
                    navigation.navigate('Auth');
                }}
                title="Log Out"
            />
        </ScrollView>
    );
};

export default Profile;
