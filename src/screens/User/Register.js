import { getDatabase, ref, set } from "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
const RegisterScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [registerError, setRegisterError] = useState('');
    const [emailError, setEmailError] = useState('')
    const [displaynameError, setDisplayNameError] = useState('')

    const RegisterHandler = () => {
        setPasswordError('');
        setRegisterError('')
        setEmailError('')
        setDisplayNameError('')
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async userCredential => {
                const user = userCredential.user;
                const db = getDatabase();
                await set(ref(db, 'users/' + user.uid), {
                    username: userName,
                    email: email,
                    password: password
                });
                alert('Đăng ký thành công!', 'Vui lòng đăng nhập để tiếp tục.');
                navigation.navigate('Login');
            
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (!email || !password) {
                    setRegisterError('Vui lòng nhập đầy đủ thông tin');
                    return;
                }
                let hasError = false;
                if (errorCode === 'auth/weak-password') {
                    hasError = true;
                    setPasswordError('Mật khẩu quá yếu, hãy chọn mật khẩu khác');
                } else if (errorCode === 'auth/email-already-in-use') {
                    hasError = true;
                    setEmailError('Email đã được sử dụng, vui lòng chọn email khác');
                } else if (!email.includes('@')) {
                    hasError = true;
                    setEmailError('Email phải có định dạng đúng');
                } else if (userName.length < 4) {
                    hasError = true;
                    setDisplayNameError('Tên hiển thị phải có ít nhất 4 kí tự');
                } else {
                    hasError = true;
                    setRegisterError('Đăng ký thất bại: ' + errorMessage);
                }
            });
    };
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <ImageBackground style={{ height: '100%', width: '100%' }} source={require('../../../assets/images/background.jpg')}>
                    <View style={styles.container}>
                        <View style={styles.wrapper}>
                            <TextInput style={{
                                borderWidth: 2,
                                borderRadius: 20,
                                borderColor: '#bbb',
                                fontSize: 20,
                                color: 'white',
                            }}
                                onChangeText={text => setUserName(text)}
                                value={userName} placeholder="Enter your username" placeholderTextColor="white" />
                            <Text style={{ color: 'red', fontSize: 20 }}>{displaynameError}</Text>
                            <TextInput style={{
                                borderWidth: 2,
                                borderRadius: 20,
                                borderColor: '#bbb',
                                fontSize: 20,
                                color: 'white',
                            }}
                                onChangeText={text => setEmail(text)}
                                value={email} placeholder="Enter your email" placeholderTextColor="white" />
                            <Text style={{ color: 'red', fontSize: 20 }}>{emailError}</Text>
                            <TextInput style={{
                                borderWidth: 2,
                                borderRadius: 20,
                                borderColor: '#bbb',
                                fontSize: 20,
                                color: 'white',
                            }}
                                onChangeText={text => setPassword(text)}
                                value={password} placeholder="Enter your password" secureTextEntry placeholderTextColor="white" />
                            <Text style={{ color: 'red', fontSize: 20 }}>{passwordError}</Text>
                            <Text style={{ color: 'red', fontSize: 20 }}>{registerError}</Text>
                            <TouchableOpacity onPress={RegisterHandler}>
                                <Text style={styles.button}>Register</Text>
                            </TouchableOpacity>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={styles.text}>Already have an account? </Text>
                                <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                                    <Text style={styles.link}>Login</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View >
                </ImageBackground>
            </ScrollView>


        </KeyboardAvoidingView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        marginTop: 200,
        width: '80%'
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#bbb',
        fontSize: 20,
        color: 'white',
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    link: {
        fontSize: 20,
        color: '#3366ff'
    },
    button: {
        fontSize: 25,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'blue',
        color: '#ffffff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 300,
    }
})
export default RegisterScreen;