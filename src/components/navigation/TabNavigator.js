import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AntDesign } from '@expo/vector-icons';
import AccountStack from './AccountStack';
import HomeStack from './HomeStack';
import BookingsStack from './BookingsStack';
import InboxStack from './InboxStack';
import ChatStack from './ChatStack';

export const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack
        },
        Bookings: {
            screen: BookingsStack
        },
        Chat: {
            screen: ChatStack
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
                } else if (routeName === 'Chat') {
                    iconName = 'message1';
                }

                return <IconComponent name={iconName} size={24} color={tintColor} />;
            }
        }),
        lazy: true,
        tabBarOptions: {
            keyboardHidesTabBar: true,
            showLabel: false,
            activeTintColor: 'orange',
            inactiveTintColor: 'gray'
        }
    }
);
