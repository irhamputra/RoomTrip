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
            title: "Your Room"
        }
    },
    EditProfileStack: {
        screen: EditProfile,
        navigationOptions: {
            title: "Edit Profile"
        }
    }
});

export default AccountStack;
