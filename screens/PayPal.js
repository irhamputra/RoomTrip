import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { savePayPal, updatePayPal } from '../redux/actions/user';

const PayPal = ({ navigation }) => {
    const { paypal } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const dispatchPayPal = paypal => dispatch(updatePayPal(paypal));
    const dispatchSavePayPal = () => dispatch(savePayPal());
    return (
        <View style={{ marginVertical: 30, marginHorizontal: 15, flex: 1 }}>
            <View style={{ height: 200, marginBottom: 20, padding: 20, backgroundColor: 'darkblue', borderRadius: 10 }}>
                <Icon name="paypal" size={30} color="white" type="font-awesome" />
                <Input
                    value={paypal}
                    label="PayPal Account"
                    labelStyle={{ textAlign: 'center' }}
                    placeholder="user@address.com"
                    containerStyle={{ marginTop: 25 }}
                    placeholderTextColor="whitesmoke"
                    inputStyle={{ textAlign: 'center', color: 'whitesmoke' }}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={e => dispatchPayPal(e)}
                />
            </View>

            <Button
                buttonStyle={{ backgroundColor: 'orange' }}
                onPress={() => {
                    dispatchSavePayPal();
                    navigation.goBack();
                }}
                title="Save PayPal Account"
            />
            <Text style={{ marginVertical: 20, color: 'gray', fontSize: 12 }}>
                By adding your PayPal Account, we can immediately send your money to your account
            </Text>
        </View>
    );
};

export default PayPal;
