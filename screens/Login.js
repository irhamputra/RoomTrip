import React, { useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from 'react-native-elements';
import { updateEmail, updatePassword, login } from '../redux/actions/user';
import { styles } from './Home';

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
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <Input
                label="Email"
                containerStyle={{ marginBottom: 10 }}
                value={email}
                autoCapitalize="none"
                placeholder="user@address.com"
                onChangeText={e => dispatchEmail(e)}
            />
            <Input
                containerStyle={{ marginBottom: 10 }}
                label="Password"
                value={password}
                autoCapitalize="none"
                placeholder="Password"
                onChangeText={e => dispatchPassword(e)}
                secureTextEntry={true}
            />
            <Button onPress={LoginUser} title="Login" />
            <Button onPress={() => navigation.navigate('SignUp')} title="Sign Up" />
        </KeyboardAvoidingView>
    );
};

export default Login;
