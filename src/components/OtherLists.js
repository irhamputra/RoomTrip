import React from 'react';
import { View } from 'react-native';
import { Divider, ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const otherList = [
    {
        title: 'Help',
        link: 'link to help page'
    },
    {
        title: 'Terms of Services',
        link: 'link to TOS'
    },
    {
        title: 'Privacy Policy',
        link: 'link to Privacy'
    },
    {
        title: 'Rate RoomTrip App',
        link: 'link to in app'
    }
];

const OtherLists = ({ navigation }) => {
    return (
        <View>
            <Divider/>
            {otherList.map((item, i) => (
                <ListItem
                    key={i}
                    title={item.title}
                    onPress={() => {
                        // navigate with params
                        console.log(i, item.title);
                    }}
                    bottomDivider
                    chevron
                />
            ))}
        </View>
    );
};

export default withNavigation(OtherLists);
