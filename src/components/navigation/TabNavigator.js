import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import Home from '../../../screens/Home';
import Bookings from '../../../screens/Bookings';
import Inbox from '../../../screens/Inbox';
import Profile from '../../../screens/Profile';

const HomeStack = createStackNavigator({
    HomeStack: {
        screen: Home,
        navigationOptions: {
            headerLeft: () => (
                <View>
                    <Text h4 h4Style={{ fontWeight: 'bold', marginLeft: 15 }}>
                        <Text style={{ color: 'orange' }}>Room</Text>Trip
                    </Text>
                </View>
            )
        }
    }
});

const AccountStack = createStackNavigator({
    AccountStack: {
        screen: Profile,
        navigationOptions: {
            title: 'Account'
        }
    }
});

const BookingsStack = createStackNavigator({
    BookingsStack: {
        screen: Bookings,
        navigationOptions: {
            title: 'Bookings'
        }
    }
});

const InboxStack = createStackNavigator({
    InboxStack: {
        screen: Inbox,
        navigationOptions: {
            title: 'Inbox'
        }
    }
});

export const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack
        },
        Bookings: {
            screen: BookingsStack
        },
        Inbox: {
            screen: InboxStack
        },
        Profile: {
            screen: AccountStack
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                const IconComponent = AntDesign;
                let iconName;

                if (routeName === 'Home') {
                    iconName = 'home';
                } else if (routeName === 'Bookings') {
                    iconName = 'profile';
                } else if (routeName === 'Inbox') {
                    iconName = 'inbox';
                } else if (routeName === 'Profile') {
                    iconName = 'user';
                }

                return <IconComponent name={iconName} size={28} color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'gray'
        }
    }
);
