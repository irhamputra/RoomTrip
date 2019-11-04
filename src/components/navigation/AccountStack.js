import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../../../screens/Profile';
import PayPal from '../../../screens/PayPal';
import Host from '../../../screens/Host';
import EditProfile from '../../../screens/EditProfile';

const AccountStack = createStackNavigator({
    AccountStack: {
        screen: Profile,
        navigationOptions: {
            title: 'Account'
        }
    },
    PayPalStack: {
        screen: PayPal,
        navigationOptions: {
            title: 'PayPal Account'
        }
    },
    HostStack: {
        screen: Host,
        navigationOptions: {
            title: 'Become a Host',
            headerLeft: null,
            gesturesEnabled: false
        }
    },
    EditProfileStack: {
        screen: EditProfile,
        navigationOptions: {
            title: 'Edit Profile'
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
