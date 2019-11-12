import React from 'react';
import { Alert, KeyboardAvoidingView, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Input, Button, Text } from 'react-native-elements';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signUp, register } from '../redux/actions/user';

const SignUp = ({ navigation }) => {
    const dispatch = useDispatch();
    const dispatchRegister = (fullName, email, password, confirmPassword) => dispatch(register(fullName, email, password, confirmPassword));
    const dispatchSignUp = () => dispatch(signUp());

    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(2, 'Too short')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Password must be 8 characters')
            .required('Required'),
        confirmPassword: Yup.string()
            .min(8, 'Password must be 8 characters')
            .required('Required')
    });

    return (
        <KeyboardAvoidingView style={{ flex: 1, paddingHorizontal: 30 }} behavior="padding" enabled>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Text h2 h2Style={{ fontWeight: 'bold', marginVertical: 20, textAlign: 'center' }}>
                        Register
                    </Text>
                    <Formik
                        initialValues={{
                            fullName: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={({ fullName, email, password, confirmPassword }) => {
                            dispatchRegister(fullName, email, password, confirmPassword);

                            if (fullName && email && password && confirmPassword) {
                                dispatchSignUp();
                            } else {
                                Alert.alert('Register failed', 'Please check your field', [{ text: 'Ok', onPress: () => null }]);
                            }
                        }}
                    >
                        {({ handleChange, handleSubmit, values, errors, touched }) => (
                            <View>
                                <Input
                                    containerStyle={errors.fullName && touched.fullName ? { marginBottom: 0 } : { marginBottom: 10 }}
                                    label="Full Name"
                                    value={values.fullName}
                                    autoCorrect={false}
                                    inputContainerStyle={errors.fullName && touched.fullName ? { borderColor: 'red' } : null}
                                    placeholder="Your email here"
                                    onChangeText={handleChange('fullName')}
                                />
                                {errors.fullName && touched.fullName ? (
                                    <Text style={{ marginBottom: 10, marginHorizontal: 10, marginTop: 5, color: 'red' }}>
                                        <ErrorMessage name="fullName" />
                                    </Text>
                                ) : null}

                                <Input
                                    label="Email"
                                    containerStyle={errors.email && touched.email ? { marginBottom: 0 } : { marginBottom: 10 }}
                                    value={values.email}
                                    autoCorrect={false}
                                    inputContainerStyle={errors.email && touched.email ? { borderColor: 'red' } : null}
                                    autoCapitalize="none"
                                    placeholder="Your email here"
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
                                    autoCapitalize="none"
                                    inputContainerStyle={errors.password && touched.password ? { borderColor: 'red' } : null}
                                    placeholder="Your password here"
                                    onChangeText={handleChange('password')}
                                    secureTextEntry={true}
                                />
                                {errors.password && touched.password ? (
                                    <Text style={{ marginBottom: 10, marginHorizontal: 10, marginTop: 5, color: 'red' }}>
                                        <ErrorMessage name="password" />
                                    </Text>
                                ) : null}

                                <Input
                                    containerStyle={errors.confirmPassword && touched.confirmPassword ? { marginBottom: 0 } : { marginBottom: 10 }}
                                    label="Confirm Password"
                                    value={values.confirmPassword}
                                    autoCapitalize="none"
                                    inputContainerStyle={errors.confirmPassword && touched.confirmPassword ? { borderColor: 'red' } : null}
                                    placeholder="Retype password again"
                                    onChangeText={handleChange('confirmPassword')}
                                    secureTextEntry={true}
                                />
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <Text style={{ marginBottom: 10, marginHorizontal: 10, marginTop: 5, color: 'red' }}>
                                        <ErrorMessage name="confirmPassword" />
                                    </Text>
                                ) : null}

                                <Text style={{ textAlign: 'center', marginBottom: 20, color: 'darkgray' }}>
                                    By registering your account, you have agreed our Terms of Services and Privacy Policy
                                </Text>

                                <Button
                                    disabled={
                                        !values.fullName ||
                                        !values.email ||
                                        !values.password ||
                                        !values.confirmPassword.includes(values.password)
                                    }
                                    type="solid"
                                    buttonStyle={{ backgroundColor: 'orange', width: '100%' }}
                                    onPress={handleSubmit}
                                    title="Create an account"
                                />
                            </View>
                        )}
                    </Formik>
                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ color: 'darkblue' }}>Login now!</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default SignUp;
