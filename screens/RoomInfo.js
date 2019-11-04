import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { updateAddress, updateCity, updateGuest, updatePrice, updateTitle, updateZIPCode } from '../redux/actions/room';
import { useDispatch, useSelector } from 'react-redux';

const RoomInfo = () => {
    const { title, address, guest, city, zipCode, price } = useSelector(state => state.room);
    const dispatch = useDispatch();
    const dispatchTitle = title => dispatch(updateTitle(title));
    const dispatchAddress = address => dispatch(updateAddress(address));
    const dispatchGuest = guest => dispatch(updateGuest(guest));
    const dispatchCity = city => dispatch(updateCity(city));
    const dispatchZipCode = zipCode => dispatch(updateZIPCode(zipCode));
    const dispatchPrice = price => dispatch(updatePrice(price));

    return (
        <KeyboardAvoidingView behavior="padding" enabled>
            <View style={{ marginHorizontal: 15, marginTop: 15 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 24, marginVertical: 15 }}>2. Tell about your place</Text>
                <Text style={{ color: 'darkgray', marginBottom: 15 }}>
                    It's time to tell how much the price each night, how many people can come and where is your apartment?
                </Text>
            </View>
            <Input
                label="Title"
                labelStyle={{ color: "black"}}
                containerStyle={{ marginBottom: 10, paddingHorizontal: 15 }}
                value={title}
                autoCorrect={false}
                keyboardType="default"
                autoCompleteType="name"
                autoCapitalize="words"
                placeholder="Your title"
                onChangeText={title => {
                    dispatchTitle(title);
                }}
            />
            <Input
                label="Address"
                labelStyle={{ color: "black"}}
                containerStyle={{ marginBottom: 10, paddingHorizontal: 15 }}
                value={address}
                autoCorrect={false}
                keyboardType="default"
                autoCompleteType="street-address"
                autoCapitalize="words"
                placeholder="Your Address"
                onChangeText={address => {
                    dispatchAddress(address);
                }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Input
                    label="ZIP Code"
                    labelStyle={{ color: "black"}}
                    containerStyle={{ marginBottom: 10, width: '50%', paddingHorizontal: 15 }}
                    value={zipCode}
                    autoCorrect={false}
                    keyboardType="number-pad"
                    autoCompleteType="name"
                    autoCapitalize="none"
                    placeholder="Your ZIP Code"
                    onChangeText={zipCode => {
                        dispatchZipCode(zipCode);
                    }}
                />
                <Input
                    label="City"
                    labelStyle={{ color: "black"}}
                    containerStyle={{ marginBottom: 10, width: '50%', paddingHorizontal: 15 }}
                    value={city}
                    autoCorrect={false}
                    keyboardType="default"
                    autoCompleteType="street-address"
                    autoCapitalize="words"
                    placeholder="Your City"
                    onChangeText={city => {
                        dispatchCity(city);
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Input
                    label="Price"
                    labelStyle={{ color: "black"}}
                    containerStyle={{ marginBottom: 10, width: '50%', paddingHorizontal: 15 }}
                    value={price}
                    autoCorrect={false}
                    keyboardType="number-pad"
                    autoCompleteType="cc-number"
                    autoCapitalize="none"
                    placeholder="10€"
                    rightIcon={{
                        name: 'euro',
                        type: 'font-awesome',
                        size: 18,
                        color: 'lightgray'
                    }}
                    onChangeText={price => {
                        dispatchPrice(price);
                    }}
                />
                <Input
                    label="Guest"
                    labelStyle={{ color: "black"}}
                    containerStyle={{ marginBottom: 10, width: '50%', paddingHorizontal: 15 }}
                    value={guest}
                    autoCorrect={false}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    placeholder="How many guest can come?"
                    onChangeText={guest => {
                        dispatchGuest(guest);
                    }}
                />
            </View>
            <Text style={{ color: 'darkgray', paddingLeft: 15 }}>Swipe to the next or return to the page</Text>
        </KeyboardAvoidingView>
    );
};

export default RoomInfo;
