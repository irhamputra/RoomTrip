import React from 'react';
import { ScrollView, View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { saveProfile, updateEmail, updateName, updatePhoneNumber } from '../redux/actions/user';

const EditProfile = ({ navigation }) => {
    const { email, name, photoURL, phoneNumber } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const dispatchName = name => dispatch(updateName(name));
    const dispatchEmail = email => dispatch(updateEmail(email));
    const dispatchPhoneNumber = phoneNumber => dispatch(updatePhoneNumber(phoneNumber));
    const dispatchSaveProfile = () => dispatch(saveProfile());

    return (
        <ScrollView contentContainerStyle={{ padding: 15, flex: 1 }}>
            <View style={{ alignItems: 'center', marginBottom: 15 }}>
                {photoURL ? (
                    <Avatar rounded size={120} showEditButton source={{ uri: photoURL }} />
                ) : (
                    <Avatar
                        rounded
                        size={120}
                        onEditPress={() => {
                            // TODO: Image Picker here
                            console.log('edit photo');
                        }}
                        showEditButton
                        title={name.charAt(0)}
                    />
                )}
            </View>
            <Input
                label="Name"
                containerStyle={{ marginBottom: 10 }}
                value={name}
                autoCorrect={false}
                keyboardType="default"
                autoCompleteType="name"
                autoCapitalize="none"
                placeholder="Your Name"
                onChangeText={name => dispatchName(name)}
            />

            <Input
                label="Email"
                autoCorrect={false}
                keyboardType="email-address"
                autoCompleteType="email"
                containerStyle={{ marginBottom: 10 }}
                value={email}
                autoCapitalize="none"
                placeholder="user@address.com"
                onChangeText={email => dispatchEmail(email)}
            />

            <Input
                label="Phone Number"
                autoCorrect={false}
                keyboardType="phone-pad"
                containerStyle={{ marginBottom: 10 }}
                value={phoneNumber}
                autoCapitalize="none"
                autoCompleteType="tel"
                placeholder="+49123XXXXXXX"
                onChangeText={phoneNumber => {
                    dispatchPhoneNumber(phoneNumber);
                }}
            />

            <Button
                onPress={() => {
                    dispatchSaveProfile();
                    navigation.goBack();
                }}
                title="Update Profile"
            />
        </ScrollView>
    );
};

export default EditProfile;
