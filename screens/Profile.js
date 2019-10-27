import React from 'react';
import { View, AsyncStorage, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Text, Divider, Button, ListItem } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { logout } from '../redux/actions/user';

const Profile = ({ navigation }) => {
    const { name, email } = useSelector(state => state.user);
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
            <View style={{ margin: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 10 }}>{name}</Text>
                    <Text style={{ marginBottom: 10 }}>{email}</Text>
                    <Button buttonStyle={{ backgroundColor: 'orange' }} title="Edit Profile" onPress={() => console.log('to profile')} />
                </View>
                <Avatar rounded size="large" title="I" />
            </View>

            <Divider style={{ marginBottom: 15 }} />
            <Divider style={{ marginTop: 15 }} />

            <View style={{ margin: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Become a host</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <AntDesign name="checkcircle" size={18} color="gray" />
                        <Text style={{ marginBottom: 10, marginLeft: 5 }}>Meldebescheinigung</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <AntDesign name="checkcircle" size={18} color="gray" />
                        <Text style={{ marginBottom: 10, marginLeft: 5 }}>Aufenthaltstitel</Text>
                    </View>
                    <Button buttonStyle={{ backgroundColor: 'orange' }} title="Add Room" onPress={() => console.log('to profile')} />
                </View>
                <Text>No</Text>
            </View>

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
