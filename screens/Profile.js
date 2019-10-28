import React from 'react';
import { View, AsyncStorage, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Button, ListItem } from 'react-native-elements';
import { logout } from '../redux/actions/user';
import AccountProfile from '../src/components/AccountProfile';
import Landlord from '../src/components/Landlord';

const Profile = ({ navigation }) => {
    const { paypal } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const dispatchLogout = () => dispatch(logout());

    const PayPal = [
        {
            title: 'PayPal Account'
        }
    ];

    const otherList = [
        {
            title: 'Help',
            icon: 'question-circle'
        },
        {
            title: 'Terms of Services',
            icon: 'tasks'
        },
        {
            title: 'Privacy Policy',
            icon: 'id-badge'
        },
        {
            title: 'Rate RoomTrip App',
            icon: 'star'
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
                    <ListItem
                        key={i}
                        checkmark={!!paypal}
                        leftIcon={{ name: 'credit-card', type: 'font-awesome' }}
                        title={item.title}
                        onPress={() => navigation.navigate('PayPalStack')}
                        bottomDivider
                        chevron
                    />
                ))}
            </View>

            <Divider style={{ marginTop: 15 }} />

            <View>
                {otherList.map((item, i) => (
                    <ListItem key={i} leftIcon={{ name: item.icon, type: 'font-awesome' }} title={item.title} bottomDivider chevron />
                ))}
            </View>

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
