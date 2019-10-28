import React from 'react';
import { View, AsyncStorage, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { Divider, Button, ListItem } from 'react-native-elements';
import { logout } from '../redux/actions/user';
import AccountProfile from '../src/components/AccountProfile';
import Landlord from '../src/components/Landlord';

const Profile = ({ navigation }) => {
    const dispatch = useDispatch();
    const dispatchLogout = () => dispatch(logout());

    const PayPal = [
        {
            title: 'PayPal Account'
        }
    ];

    const otherList = [
        {
            title: 'Help'
        },
        {
            title: 'Terms of Services'
        },
        {
            title: 'Privacy Policy'
        },
        {
            title: 'Rate RoomTrip App'
        }
    ];

    return (
        <ScrollView style={{ flex: 1 }}>
            <AccountProfile />

            <Divider style={{ marginBottom: 15 }} />
            <Divider style={{ marginTop: 15 }} />

            <Landlord />

            <Divider />

            <View style={{ marginBottom: 15 }}>
                {PayPal.map((item, i) => (
                    <ListItem key={i} title={item.title} bottomDivider chevron />
                ))}
            </View>

            <Divider style={{ marginTop: 15 }} />

            <View>
                {otherList.map((item, i) => (
                    <ListItem key={i} title={item.title} bottomDivider chevron />
                ))}
            </View>

            <Button
                type="clear"
                containerStyle={{ marginTop: 15 }}
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
