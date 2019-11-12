import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Input, Button, Text } from 'react-native-elements';
import { ErrorMessage, Formik } from 'formik';
import { login, signIn } from '../redux/actions/user';
import * as Yup from 'yup';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const dispatchSignIn = (email, password) => dispatch(signIn(email, password));
    const dispatchLogin = () => dispatch(login());

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Password must be 8 characters')
            .required('Required')
    });

    return (
        <KeyboardAvoidingView style={{ flex: 1, paddingHorizontal: 30 }} behavior="padding" enabled>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Text h2 h2Style={{ fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
                        <Text style={{ color: 'orange' }}>Room</Text>Trip
                    </Text>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={({ email, password }) => {
                            dispatchSignIn(email, password);

                            if (email && password) {
                                dispatchLogin();
                            }
                        }}
                    >
                        {({ handleChange, handleSubmit, values, errors, touched }) => (
                            <View>
                                <Input
                                    label="Email"
                                    containerStyle={errors.email && touched.email ? { marginBottom: 0 } : { marginBottom: 10 }}
                                    value={values.email}
                                    autoCapitalize="none"
                                    inputContainerStyle={errors.email && touched.email ? { borderColor: 'red' } : null}
                                    placeholder="user@address.com"
                                    onChangeText={handleChange('email')}
                                />
                                {errors.email && touched.email ? (
                                    <Text style={{ marginBottom: 10, marginHorizontal: 10, marginTop: 5, color: 'red' }}>
                                        <ErrorMessage name="email" />
                                    </Text>
                                ) : null}

                                <Input
                                    containerStyle={errors.password && touched.password ? { marginBottom: 0 } : { marginBottom: 10 }}
                                    label="Password"
                                    value={values.password}
                                    inputContainerStyle={errors.password && touched.password ? { borderColor: 'red' } : null}
                                    autoCapitalize="none"
                                    placeholder="Password"
                                    onChangeText={handleChange('password')}
                                    secureTextEntry={true}
                                />
                                {errors.password && touched.password ? (
                                    <Text style={{ marginBottom: 10, marginHorizontal: 10, marginTop: 5, color: 'red' }}>
                                        <ErrorMessage name="password" />
                                    </Text>
                                ) : null}

                                <Button
                                    type="solid"
                                    disabled={!values.email || !values.password}
                                    buttonStyle={{ backgroundColor: 'orange', width: '100%' }}
                                    onPress={handleSubmit}
                                    title="Login"
                                />
                            </View>
                        )}
                    </Formik>
                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('SignUp');
                            }}
                        >
                            <Text style={{ color: 'darkblue' }}>Sign Up now!</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default Login;
