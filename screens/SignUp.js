import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from 'react-native-elements';
import { styles } from './Home';
import { updateEmail, updatePassword, signUp, updateName } from '../redux/actions/user';

const SignUp = ({ navigation }) => {
    const { email, password, fullName } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const dispatchFullName = fullName => dispatch(updateName(fullName));
    const dispatchEmail = email => dispatch(updateEmail(email));
    const dispatchPassword = password => dispatch(updatePassword(password));
    const dispatchSignUp = () => dispatch(signUp());

    const SignUpUser = () => {
        if (email && password && name) {
            dispatchSignUp();
            navigation.navigate('Home');
        }

        alert('You must fill all required fields');
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <Input
                containerStyle={{ marginBottom: 10 }}
                label="Full Name"
                value={fullName}
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
                containerStyle={{ marginBottom: 10 }}
                label="Password"
                value={password}
                autoCapitalize="none"
                placeholder="Your password here"
                onChangeText={e => dispatchPassword(e)}
                secureTextEntry={true}
            />

            <Button onPress={SignUpUser} title="Create Account" />
        </KeyboardAvoidingView>
    );
};

export default SignUp;
