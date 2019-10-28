import React, { useState } from 'react';
import { KeyboardAvoidingView, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Text, CheckBox } from 'react-native-elements';
import { updateEmail, updatePassword, signUp, updateName } from '../redux/actions/user';

const SignUp = ({ navigation }) => {
    const [check, setCheck] = useState(false);
    const { email, password, name } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const dispatchFullName = fullName => dispatch(updateName(fullName));
    const dispatchEmail = email => dispatch(updateEmail(email));
    const dispatchPassword = password => dispatch(updatePassword(password));
    const dispatchSignUp = () => dispatch(signUp());

    const SignUpUser = () => {
        if (email && password && name) {
            dispatchSignUp();
            navigation.navigate('Home');
        } else {
            alert('You must fill all required fields');
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ marginHorizontal: 30, justifyContent: 'center', alignItems: 'center', flex: 1 }}
            behavior="padding"
            enabled
        >
            <Text h2 h2Style={{ fontWeight: 'bold', marginVertical: 20 }}>
                Register
            </Text>
            <Input
                containerStyle={{ marginBottom: 10 }}
                label="Full Name"
                value={name}
                autoCorrect={false}
                placeholder="Your email here"
                onChangeText={e => dispatchFullName(e)}
            />

            <Input
                label="Email"
                containerStyle={{ marginBottom: 10 }}
                value={email}
                autoCapitalize="none"
                placeholder="Your email here"
                onChangeText={e => dispatchEmail(e)}
            />

            <Input
                containerStyle={{ marginBottom: 20 }}
                label="Password"
                value={password}
                autoCapitalize="none"
                placeholder="Your password here"
                onChangeText={e => dispatchPassword(e)}
                secureTextEntry={true}
            />

            <CheckBox
                checked={check}
                onPress={() => setCheck(!check)}
                containerStyle={{ backgroundColor: 'transparent', marginBottom: 20 }}
                title="I agree with all Terms of Services and Privacy Policy of RoomTrip"
            />

            <Button
                disabled={(!email && !name) || (!password || !check)}
                type="solid"
                buttonStyle={{ backgroundColor: 'orange', width: '100%' }}
                onPress={SignUpUser}
                title="Create an account"
            />

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: 'darkblue' }}>Login now!</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default SignUp;
