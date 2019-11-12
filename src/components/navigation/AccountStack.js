import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../../../screens/Profile';
import PayPal from '../../../screens/PayPal';
import EditProfile from '../../../screens/EditProfile';
import HostStack from './HostStack';
import BackButton from '../BackButton';
import SaveButton from '../SaveButton';

const AccountStack = createStackNavigator({
    AccountStack: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile'
        }
    },
    PayPalStack: {
        screen: PayPal,
        navigationOptions: {
            title: 'PayPal Account'
        }
    },
    HostStack: {
        screen: HostStack,
        navigationOptions: {
            title: 'Become a Host',
            headerLeft: <BackButton />,
            headerLeftContainerStyle: {
                marginLeft: 5
            },
            headerRight: <SaveButton />,
            headerRightContainerStyle: {
                marginRight: 5
            },
            gesturesEnabled: false
        }
    },
    EditProfileStack: {
        screen: EditProfile,
        navigationOptions: {
            title: 'Edit Profile',
            headerLeft: <BackButton />,
            headerLeftContainerStyle: {
                marginLeft: 5
            }
        }
    }
});

AccountStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;

    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible
    };
};

export default AccountStack;
