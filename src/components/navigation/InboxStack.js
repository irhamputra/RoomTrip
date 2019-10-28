import { createStackNavigator } from 'react-navigation-stack';
import Inbox from '../../../screens/Inbox';

const InboxStack = createStackNavigator({
    InboxStack: {
        screen: Inbox,
        navigationOptions: {
            title: 'Inbox'
        }
    }
});

export default InboxStack;
