import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { cleanStateSingleRoom, saveRoom } from '../../redux/actions/room';
import { getAllRooms } from '../../redux/actions/rooms';
import { useDispatch } from 'react-redux';

const SaveButton = ({ navigation }) => {
    const dispatch = useDispatch();
    const dispatchAddRoom = async () => await dispatch(saveRoom());
    const dispatchCleanState = () => dispatch(cleanStateSingleRoom());
    const dispatchGetAllRooms = () => dispatch(getAllRooms());
    const { routeName } = navigation.state;

    return (
        <View>
            <Button
                title="Save"
                style={{ color: 'blue' }}
                type="clear"
                onPress={() => {
                    if (routeName === 'HostStack') {
                        console.log('From Host Stack');
                        dispatchAddRoom()
                            .then(() => {
                                dispatchGetAllRooms();
                            })
                            .finally(() => {
                                dispatchCleanState();
                                navigation.goBack();
                            });
                    } else if (routeName === 'EditProfileStack') {
                        // dispatchEditProfile
                        navigation.goBack();
                    }
                }}
            />
        </View>
    );
};

export default withNavigation(SaveButton);
