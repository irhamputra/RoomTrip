import { createStackNavigator } from 'react-navigation-stack';
import Login from '../../../screens/Login';
import SignUp from '../../../screens/SignUp';

export const AuthNavigator = createStackNavigator(
    {
        Login: {
            screen: Login
        },
        SignUp: {
            screen: SignUp
        }
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    }
);
