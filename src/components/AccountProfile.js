import React from 'react';
import { withNavigation } from 'react-navigation';
import { View } from 'react-native';
import { Avatar, Button, Divider, Text } from 'react-native-elements';
import { useSelector } from 'react-redux';

const AccountProfile = ({ navigation }) => {
    const { name, email, phoneNumber, photoURL } = useSelector(state => state.user);

    return (
        <View style={{ marginBottom: 20 }}>
            <View style={{ margin: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                    {photoURL ? (
                        <Avatar rounded size="large" source={{ uri: photoURL }} />
                    ) : (
                        <Avatar rounded size="large" title={name.charAt(0)} />
                    )}
                    <View style={{ flex: 1, marginLeft: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 10 }}>{name}</Text>
                        <Text style={{ marginBottom: 10 }}>{email}</Text>
                        {phoneNumber && <Text style={{ marginBottom: 10 }}>{phoneNumber}</Text>}
                    </View>
                </View>
                <Button
                    buttonStyle={{ backgroundColor: 'orange' }}
                    title="Edit Profile"
                    onPress={() => navigation.navigate('EditProfileStack')}
                />
            </View>
            <Divider />
        </View>
    );
};

export default withNavigation(AccountProfile);
