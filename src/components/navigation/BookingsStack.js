import { createStackNavigator } from 'react-navigation-stack';
import Bookings from '../../../screens/Bookings';

const BookingsStack = createStackNavigator({
    BookingsStack: {
        screen: Bookings,
        navigationOptions: {
            title: 'Bookings'
        }
    }
});

export default BookingsStack;
