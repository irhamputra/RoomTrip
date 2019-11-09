import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const ChatButton = ({ navigation }) => {
    return (
        <View style={{ marginRight: 15 }}>
            <TouchableOpacity onPress={() => navigation.navigate('ChatStack')}>
                <AntDesign name="message1" size={22} />
            </TouchableOpacity>
        </View>
    );
};

export default withNavigation(ChatButton);
