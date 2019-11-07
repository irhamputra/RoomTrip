import { createStackNavigator } from 'react-navigation-stack';
import Chat from '../../../screens/Chat';

const ChatStack = createStackNavigator({
    ChatStack: {
        screen: Chat,
        navigationOptions: {
            title: 'Chat'
        }
    }
});

export default ChatStack;
