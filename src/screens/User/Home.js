import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {getDatabase, ref, get} from 'firebase/database';
import {useNavigation, useRoute} from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {uid} = route?.params;
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUserUsername = async () => {
      try {
        const db = getDatabase();
        const userRef = ref(db,
           'users/' + uid);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const retrievedUsername = userData.username;
          setUsername(retrievedUsername);
        } else {
          setUsername('User not found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    getUserUsername();
  }, [uid]);
  return (
    <ScrollView style={{flex:1}}>
      
      <View
        style={{
            flex:1,
          alignItems: 'center',
          justifyContent: 'center',
          
          height: 200,
          width: 410,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor:'#ff8c1a'
          
        }}>
        <Text style={{color: 'black', fontSize: 22, marginTop: 10, fontWeight:'bold'}}>
          Hi : {username}
        </Text>
        <Image
          source={require('../../../assets/images/emoji.png')}
          style={{height: 170, width: 170}}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 427,
          width: 410,
          backgroundColor:'#ff8c1a'
        }}>
        <ImageBackground
          source={require('../../../assets/images/backgroundscreen.jpg')}
          style={{
            flex: 1,
            height: '100%',
            width: '98%',
            justifyContent:'center',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          ></ImageBackground>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default HomeScreen;
