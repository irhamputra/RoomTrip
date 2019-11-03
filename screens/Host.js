import React, { useState, useEffect } from 'react';
import { ScrollView, Alert, View, Image, Dimensions } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { cancelAddRoom, updateBlob, uploadPhoto } from '../redux/actions/room';

const Host = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [dimension, setDimension] = useState(null);
    const { photoURL } = useSelector(state => state.room);
    const dispatch = useDispatch();
    const dispatchPhotoURL = photoURL => dispatch(uploadPhoto(photoURL));
    const dispatchBlob = blob => dispatch(updateBlob(blob));
    const dispatchCancelRoom = () => dispatch(cancelAddRoom());

    const chooseImage = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status === 'granted') {
                let { cancelled, uri } = await ImagePicker.launchImageLibraryAsync();
                console.log(uri);
                if (!cancelled) {
                    dispatchPhotoURL(uri);
                    uploadImage(uri)
                        .then(() => console.log('Success'))
                        .catch(err => console.log(err));
                } else {
                    Alert.alert('You have canceled to upload image');
                }
            }
        } else {
        }
    };

    const uploadImage = async uri => {
        const res = await fetch(uri);
        const blob = await res.blob();
        await dispatchBlob(blob);

        console.log(blob);
    };

    useEffect(() => {
        const { height, width } = Dimensions.get('window');
        setDimension({ height, width });
    }, []);

    return (
        <ScrollView>
            {photoURL ? (
                <View>
                    <Image source={{ uri: photoURL }} style={{ width: dimension.width, height: dimension.height / 4 }} />
                    <Button title="Edit image.." onPress={chooseImage} />
                </View>
            ) : (
                <Button title="Choose image.." onPress={chooseImage} />
            )}
            <Input
                label="Title"
                containerStyle={{ marginBottom: 10 }}
                value={title}
                autoCorrect={false}
                keyboardType="default"
                autoCompleteType="name"
                autoCapitalize="none"
                placeholder="Your Name"
                onChangeText={title => {
                    setTitle(title);
                }}
            />
            <Input
                label="Address"
                containerStyle={{ marginBottom: 10 }}
                value={title}
                autoCorrect={false}
                keyboardType="default"
                autoCompleteType="name"
                autoCapitalize="none"
                placeholder="Your Name"
                onChangeText={title => {
                    setTitle(title);
                }}
            />
            <Button
                title="Save Room"
                onPress={() => {
                    console.log('Save');
                }}
            />
            <Button
                title="Cancel Room"
                onPress={() => {
                    dispatchCancelRoom();
                    navigation.goBack();
                }}
            />
        </ScrollView>
    );
};

export default Host;
