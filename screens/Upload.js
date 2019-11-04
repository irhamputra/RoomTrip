import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Image, ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { updateBlob, uploadPhoto } from '../redux/actions/room';
import { useDispatch, useSelector } from 'react-redux';

const Upload = () => {
    const [dimension, setDimension] = useState(null);
    const { photoURL } = useSelector(state => state.room);
    const dispatch = useDispatch();

    const dispatchPhotoURL = photoURL => dispatch(uploadPhoto(photoURL));
    const dispatchBlob = blob => dispatch(updateBlob(blob));

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
                }
            }
        }
    };

    const uploadImage = async uri => {
        const res = await fetch(uri);
        const blob = await res.blob();
        await dispatchBlob(blob);
    };

    useEffect(() => {
        const { height, width } = Dimensions.get('window');
        setDimension({ height, width });
    }, []);

    return (
        <ScrollView style={{ flex: 1, marginHorizontal: 15, marginTop: 30  }}>
            <Text h3 h3Style={{ fontWeight: 'bold', marginBottom: 15 }}>
                Welcome to RoomTrip Host
            </Text>
            <Text style={{ color: 'darkgray', marginBottom: 15 }}>
                Before becoming a host you need to fill the information that is required
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>1. Upload image of your room</Text>
            {photoURL ? (
                <View style={{ flex: 1, marginVertical: 20 }}>
                    <Image source={{ uri: photoURL }} style={{ width: '100%', height: dimension.height / 3, borderRadius: 10 }} />
                    <Button title="Edit image" containerStyle={{ marginVertical: 15 }} onPress={chooseImage} />
                    <Button
                        title="Delete image"
                        type="clear"
                        titleStyle={{ color: 'red' }}
                        onPress={() => {
                            Alert.alert(
                                'Delete image',
                                'Are you sure?',
                                [
                                    { text: 'Yes', onPress: () => dispatchPhotoURL('') },
                                    { text: 'Discard', onPress: null, style: 'destructive' }
                                ],
                                { cancelable: false }
                            );
                        }}
                    />
                </View>
            ) : (
                <Button
                    icon={{ name: 'image', size: 20 }}
                    type="outline"
                    title="Choose image"
                    buttonStyle={{ padding: 70 }}
                    containerStyle={{ marginVertical: 15 }}
                    onPress={chooseImage}
                />
            )}
            <Text style={{ color: 'darkgray' }}>Swipe to the next or return to the page</Text>
        </ScrollView>
    );
};

export default Upload;
