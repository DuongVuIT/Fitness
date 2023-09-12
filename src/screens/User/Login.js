import React, {useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigation = useNavigation();
  const firebaseConfig = {
    apiKey: 'AIzaSyBtJx2xaxGgLaUPSE2Xm0dCL6C-7bI5dvM',
    authDomain: 'gymapp-74441.firebaseapp.com',
    projectId: 'gymapp-74441',
    databaseURL: 'https://gymapp-74441-default-rtdb.firebaseio.com',
    storageBucket: 'gymapp-74441.appspot.com',
    messagingSenderId: '61350713697',
    appId: '1:61350713697:web:12aed17f0b22219e50cd20',
  };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  useFocusEffect(
    React.useCallback(() => {
      setEmail('duongvuit.26@gmail.com');
      setPassword('123456');
    }, []),
  );
  const LoginHandler = () => {
    setEmailError('');
    setPasswordError('');
    setLoginStatus('');

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        Alert.alert('Notification', 'Hi, Welcome to my App', [{text: 'OK'}]);

        navigation.navigate('Exercise', {uid: user.uid});
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (!email || !password) {
          setLoginStatus('Vui lòng nhập email và mật khẩu');
          return;
        }
        let hasError = false;
        if (
          errorCode === 'auth/invalid-email' ||
          errorCode === 'auth/user-not-found'
        ) {
          setEmailError('Email không hợp lệ hoặc không tìm thấy tài khoản');
          hasError = true;
        } else if (errorCode === 'auth/wrong-password') {
          setPasswordError('Mật khẩu không đúng');
          hasError = true;
        } else {
          setLoginStatus('Đăng nhập thất bại: ' + errorMessage);
          hasError = true;
        }
      });
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          source={require('../../../assets/images/background.jpg')}>
          <View style={styles.container}>
            <View style={styles.wrapper}>
              <TextInput
                style={{
                  borderWidth: 2,
                  borderRadius: 20,
                  borderColor: '#bbb',
                  fontSize: 20,
                  width: '100%',
                  height: 50,
                  color: 'white',
                }}
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Enter your email"
                placeholderTextColor="white"
              />
              <Text style={{color: 'red', fontSize: 20}}>{emailError}</Text>
              <TextInput
                style={{
                  borderWidth: 2,
                  borderRadius: 20,
                  borderColor: '#bbb',
                  fontSize: 20,
                  width: '100%',
                  height: 50,
                  color: 'white',
                }}
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Enter your password"
                placeholderTextColor="white"
                secureTextEntry
              />
              <Text style={{color: 'red', fontSize: 20}}>{passwordError}</Text>
              <Text style={{color: 'red', fontSize: 20, marginBottom: 5}}>
                {loginStatus}
              </Text>
              <TouchableOpacity
                style={{backgroundColor: 'blue', borderRadius: 20}}
                onPress={LoginHandler}>
                <Text style={styles.button}>Login</Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text}>Don't have account? </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Register');
                  }}>
                  <Text style={styles.link}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    marginTop: 200,
    width: '80%',
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
  },
  link: {
    fontSize: 20,
    color: '#3366ff',
  },
  button: {
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 500,
    height: 500,
  },
});
export default LoginScreen;
