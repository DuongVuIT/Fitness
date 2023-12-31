import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import React from 'react';

export default function Leg({navigation}) {
  return (
    <ScrollView overScrollMode="never" style={{backgroundColor: '#ffffff'}}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('BarbellSquat')}>
          <View style={styles.view_img}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.image}
              source={require('../../../assets/gif/leg/barbellSquat.gif')}></ImageBackground>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Barbell Squat
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('legextension')}>
          <View style={styles.view_img}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.image}
              source={require('../../../assets/gif/leg/legextension.gif')}></ImageBackground>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Leg Extension
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('hacksquat')}>
          <View style={styles.view_img}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.image}
              source={require('../../../assets/gif/leg/Barbell-Hack-Squat.gif')}></ImageBackground>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Hack Squat
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view_img: {
    marginTop: 5,
    width: 390,
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
});
