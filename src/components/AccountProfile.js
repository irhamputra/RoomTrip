import React from 'react';
import { withNavigation } from 'react-navigation';
import { View } from 'react-native';
import { Avatar, Button, Divider, Text } from 'react-native-elements';
import { useSelector } from 'react-redux';

const AccountProfile = ({ navigation }) => {
    const { fullName, email, phoneNumber, photoURL } = useSelector(state => state.user);

    return (
        <View style={{ marginBottom: 20 }}>
            <View style={{ margin: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                    <View>
                        {photoURL ? (
                            <Avatar rounded size="large" source={{ uri: photoURL }} />
                        ) : (
                            <Avatar rounded size="large" title={fullName.charAt(0)} />
                        )}
                    </View>
                    <View style={{ flex: 1, marginLeft: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 5 }}>{fullName}</Text>
                        <Text style={{ marginBottom: 5 }}>{email}</Text>
                        {phoneNumber ? <Text style={{ marginBottom: 5 }}>{phoneNumber}</Text> : null}
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
