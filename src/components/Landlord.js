import React from 'react';
import { withNavigation } from 'react-navigation';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const Landlord = ({ navigation }) => {
    return (
        <View style={{ margin: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
                <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Become a host</Text>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="checkcircle" size={18} color="gray" />
                    <Text style={{ marginBottom: 10, marginLeft: 5 }}>Meldebescheinigung</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="checkcircle" size={18} color="gray" />
                    <Text style={{ marginBottom: 10, marginLeft: 5 }}>Aufenthaltstitel</Text>
                </View>
                <Button buttonStyle={{ backgroundColor: 'orange' }} title="Add Room" onPress={() => navigation.navigate('HostStack')} />
            </View>
            <Text>No</Text>
        </View>
    );
};

export default withNavigation(Landlord);
