import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Login from '../../../screens/Login';
import SignUp from '../../../screens/SignUp';

export const AuthNavigator = createMaterialTopTabNavigator(
    {
        Login: {
            screen: Login
        },
        SignUp: {
            screen: SignUp
        }
    }, {
        initialRoute: "Login",
        lazy: true,
        swipeEnabled: true,
        tabBarComponent: null,
    }
);
