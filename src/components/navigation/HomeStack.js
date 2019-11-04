import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../../../screens/Home';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

const HomeStack = createStackNavigator({
    HomeStack: {
        screen: Home,
        navigationOptions: {
            headerTitle: () => (
                <View>
                    <Text h4 h4Style={{ fontWeight: 'bold' }}>
                        <Text style={{ color: 'orange' }}>Room</Text>Trip
                    </Text>
                </View>
            ),
        }
    }
});

export default HomeStack
