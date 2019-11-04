import React from 'react';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { useDispatch } from 'react-redux';
import { cancelAddRoom } from '../../redux/actions/room';

const BackButton = ({ navigation }) => {
    const dispatch = useDispatch();
    const dispatchCancelAddRoom = () => dispatch(cancelAddRoom());
    return (
        <Button
            title="Cancel"
            titleStyle={{ color: 'red' }}
            type="clear"
            onPress={() => {
                dispatchCancelAddRoom();
                navigation.goBack();
            }}
        />
    );
};

export default withNavigation(BackButton);
