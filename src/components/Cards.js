import React from 'react';
import { FlatList, Image, TouchableOpacity, View, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const DATA = [
    {
        id: 1,
        title: 'How to book a room?',
        linkURL: 'https://google.com',
        imageURL:
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80'
    },
    {
        id: 2,
        title: 'Become a Host',
        linkURL: 'https://google.com',
        imageURL: 'https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
        id: 3,
        title: 'Prepare for the test',
        linkURL: 'https://google.com',
        imageURL: 'https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    }
];

const Card = () => {
    const { height, width } = Dimensions.get('window');
    return (
        <View style={{ marginTop: 20, marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginHorizontal: 15, marginTop: 20 }}>Welcome to RoomTrip!</Text>
            <FlatList
                style={{ paddingHorizontal: 5 }}
                showsVerticalScrollIndicator={false}
                data={DATA}
                keyExtractor={data => data.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => console.log(parseInt(item.id), item.title)}>
                        <View
                            style={{
                                marginHorizontal: 10,
                                marginVertical: 15,
                                borderRadius: 10,
                                overflow: 'hidden'
                            }}
                        >
                            <Image source={{ uri: item.imageURL }} style={{ width, height: 200 }} />
                            <Text style={{ position: 'absolute', fontSize: 20, fontWeight: 'bold', margin: 10, color: 'white' }}>
                                RoomTrip
                            </Text>
                            <Text style={{ position: 'absolute', fontSize: 20, fontWeight: 'bold', bottom: 0, margin: 10, color: 'white' }}>
                                {item.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default withNavigation(Card);
