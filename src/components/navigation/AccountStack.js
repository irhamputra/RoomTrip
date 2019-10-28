import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../../../screens/Profile';
import PayPal from '../../../screens/PayPal';

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
    }
});

export default AccountStack;
