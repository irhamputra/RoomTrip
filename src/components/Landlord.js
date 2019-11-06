import React from 'react';
import { withNavigation } from 'react-navigation';
import { View } from 'react-native';
import { Button, Divider, Text } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const Landlord = ({ navigation }) => {
    const { paypal } = useSelector(state => state.user);

    return (
        <View>
            <Divider />
            <View style={{ margin: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
                    {!paypal && (
                        <Text style={{ color: 'gray', fontSize: 12 }}>
                            Please add PayPal account first if you want to become a host
                        </Text>
                    )}
                </View>
                {paypal ? (
                    <Button buttonStyle={{ backgroundColor: 'orange' }} title="Add Room" onPress={() => navigation.navigate('HostStack')} />
                ) : null}
            </View>
        </View>
    );
};

export default withNavigation(Landlord);
