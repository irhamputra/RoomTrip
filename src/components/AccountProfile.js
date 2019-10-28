import React from 'react';
import { withNavigation } from 'react-navigation';
import { View } from 'react-native';
import { Avatar, Button, Text } from 'react-native-elements';
import { useSelector } from 'react-redux';

const AccountProfile = ({ navigation }) => {
    const { name, email } = useSelector(state => state.user);

    return (
        <View style={{ margin: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 10 }}>{name}</Text>
                <Text style={{ marginBottom: 10 }}>{email}</Text>
                <Button buttonStyle={{ backgroundColor: 'orange' }} title="Edit Profile" onPress={() => console.log('Edit Profile')} />
            </View>
            <Avatar rounded size="large" title={name.charAt(0)} />
        </View>
    );
};

export default withNavigation(AccountProfile);
