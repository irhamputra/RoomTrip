import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Upload from '../../../screens/Upload';
import RoomInfo from '../../../screens/RoomInfo';
import Description from '../../../screens/Description';

const HostStack = createMaterialTopTabNavigator(
    {
        Upload: {
            screen: Upload
        },
        RoomInfo: {
            screen: RoomInfo
        },
        Description: {
            screen: Description
        }
    },
    {
        initialRouteName: 'Upload',
        lazy: true,
        swipeEnabled: true,
        tabBarComponent: null,
    }
);

export default HostStack;
