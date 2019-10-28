import React, { useEffect } from 'react';
import { KeyboardAvoidingView, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Text } from 'react-native-elements';
import { updateEmail, updatePassword, login } from '../redux/actions/user';

const Login = ({ navigation }) => {
    const { email, password } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const dispatchEmail = email => dispatch(updateEmail(email));
    const dispatchPassword = password => dispatch(updatePassword(password));
    const dispatchLogin = () => dispatch(login());

    // TODO: How to read token from AsyncStorage in this case useEffect doesn't want to cleanup
    useEffect(() => {});

    const LoginUser = () => {
        dispatchLogin();
    };

    return (
        <KeyboardAvoidingView
            style={{ marginHorizontal: 30, justifyContent: 'center', alignItems: 'center', flex: 1 }}
            behavior="padding"
            enabled
        >
            <Text h2 h2Style={{ fontWeight: 'bold', marginVertical: 20 }}>
                <Text style={{ color: 'orange' }}>Room</Text>Trip
            </Text>
            <Input
                label="Email"
                containerStyle={{ marginBottom: 10 }}
                value={email}
                autoCapitalize="none"
                placeholder="user@address.com"
                onChangeText={e => dispatchEmail(e)}
            />
            <Input
                containerStyle={{ marginBottom: 20 }}
                label="Password"
                value={password}
                autoCapitalize="none"
                placeholder="Password"
                onChangeText={e => dispatchPassword(e)}
                secureTextEntry={true}
            />
            <Button type="solid" buttonStyle={{ backgroundColor: 'orange', width: '100%' }} onPress={LoginUser} title="Login" />
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ color: 'darkblue' }}>Sign Up now!</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;
