import React, { useEffect } from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
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
    useEffect(() => {},[]);

    return (
        <KeyboardAvoidingView style={{ flex: 1, paddingHorizontal: 30 }} behavior="padding" enabled>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Text h2 h2Style={{ fontWeight: 'bold', marginBottom: 20, textAlign: "center" }}>
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
                    <Button
                        type="solid"
                        buttonStyle={{ backgroundColor: 'orange', width: '100%' }}
                        onPress={() => dispatchLogin()}
                        title="Login"
                    />
                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: "center" }}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{ color: 'darkblue' }}>Sign Up now!</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default Login;
