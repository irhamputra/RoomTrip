import React from 'react';
import { View, SafeAreaView, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Card from '../components/Cards';

const Lists = () => {
    const { name } = useSelector(state => state.user);

    const mockDataCity = [
        {
            id: 1,
            city: 'Leipzig',
            imageURL: 'https://www.planetware.com/photos-large/D/germany-leipzig-markt-and-old-city-hall.jpg'
        },
        {
            id: 2,
            city: 'Halle (Saale)',
            imageURL: 'https://www.merseburg.de/de/datei/vorschau/2560x1440/id/9495,1055/hallmarkt_halle.jpg'
        },
        {
            id: 3,
            city: 'Dresden',
            imageURL: 'https://www.planetware.com/photos-large/D/neumarkt.jpg'
        },
        {
            id: 4,
            city: 'Berlin',
            imageURL: 'https://www.steigenberger.com/cache/images/berlin_fotolia_93887_2206ae4123b62425d56a38c.jpg'
        },
        {
            id: 5,
            city: 'Hamburg',
            imageURL: 'https://media-cdn.tripadvisor.com/media/photo-s/16/75/ab/64/speicherstadt-and-hafencity.jpg'
        }
    ];

    return (
        <View>
            <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Look for new trip, {name}?</Text>
            </View>
            <FlatList
                horizontal
                style={{ paddingHorizontal: 5 }}
                showsHorizontalScrollIndicator={false}
                data={mockDataCity}
                keyExtractor={data => data.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => console.log(parseInt(item.id), item.city)}>
                        <View
                            style={{
                                marginHorizontal: 10,
                                borderWidth: 1,
                                borderColor: 'lightgray',
                                borderRadius: 10,
                                overflow: 'hidden'
                            }}
                        >
                            <Image source={{ uri: item.imageURL }} style={{ width: 200, height: 150 }} />
                            <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 10 }}>{item.city}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default withNavigation(Lists);
