import React from 'react';
import { Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { cancelAddRoom } from '../../redux/actions/room';
import { updateBlobUser } from '../../redux/actions/user';

const BackButton = ({ navigation }) => {
    const { photoURL } = useSelector(state => state.user);
    const { photoURL: roomPhoto } = useSelector(state => state.room);
    const dispatch = useDispatch();
    const dispatchCancelAddRoom = () => dispatch(cancelAddRoom());
    const dispatchUpdateBlob = blob => dispatch(updateBlobUser(blob));
    return (
        <Button
            title="Cancel"
            titleStyle={{ color: 'red' }}
            type="clear"
            onPress={() => {
                const { routeName } = navigation.state;
                if (routeName === 'HostStack') {
                    if (roomPhoto) {
                        Alert.alert('Discard the changed', 'If you go back, the profile will not change', [
                            {
                                text: 'Änderungen verwerfen',
                                onPress: () => {
                                    dispatchCancelAddRoom();
                                    navigation.goBack();
                                },
                                style: 'cancel'
                            },
                            { text: 'Weiter bearbeiten', onPress: () => null }
                        ]);
                    } else {
                        navigation.goBack();
                    }
                } else if (routeName === 'EditProfileStack') {
                    if (photoURL.startsWith('file')) {
                        Alert.alert('Discard the changed', 'If you go back, the profile will not change', [
                            {
                                text: 'Änderungen verwerfen',
                                onPress: () => {
                                    // TODO: how to get previous state here
                                    dispatchUpdateBlob(null);
                                    navigation.goBack();
                                },
                                style: 'cancel'
                            },
                            { text: 'Weiter bearbeiten', onPress: () => null }
                        ]);
                    } else {
                        navigation.goBack();
                    }
                }
            }}
        />
    );
};

export default withNavigation(BackButton);
