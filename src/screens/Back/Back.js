import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';

export default function Back({navigation}) {
  return (
    <ScrollView overScrollMode="never" style={{backgroundColor: '#ffffff'}}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Lat Pulldown')}>
          <View style={styles.view_img}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.image}
              source={require('../../../assets/gif/back/latpulldown.gif')}></ImageBackground>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Lat Pulldown
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('SeatCableRow')}>
          <View style={styles.view_img}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.image}
              source={require('../../../assets/gif/back/seatedcablerow.gif')}></ImageBackground>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Seat Cable Row
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('inverted')}>
          <View style={styles.view_img}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.image}
              source={require('../../../assets/gif/back/Inverted-Row.gif')}></ImageBackground>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Inverted Row
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
