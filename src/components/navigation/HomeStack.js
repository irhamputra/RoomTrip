import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../../../screens/Home';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import ChatButton from '../ChatButton';
import Chat from '../../../screens/Chat';

const HomeStack = createStackNavigator({
    HomeStack: {
        screen: Home,
        navigationOptions: {
            headerLeft: () => (
                <View style={{ marginLeft: 15 }}>
                    <Text h4 h4Style={{ fontWeight: 'bold' }}>
                        <Text style={{ color: 'orange' }}>Room</Text>Trip
                    </Text>
                </View>
            ),
            headerRight: <ChatButton />
        }
    },
    ChatStack: {
        screen: Chat,
        navigationOptions: {
            title: 'Chat'
        }
    }
}, {
    cardOverlayEnabled: true
});

export default HomeStack;
