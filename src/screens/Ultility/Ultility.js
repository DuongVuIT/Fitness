import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

export default function Ultility({navigation}) {
  const handlerOnPress = () => {
    Alert.alert('Warning', 'Comming soon');
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Bmi')}>
        <View style={styles.view_center}>
          <View style={styles.view_img}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/bmicalculator.jpg')}
            />
            <Text style={styles.text}>BMI CALCULATOR</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('repmax')}>
        <View style={styles.view_center}>
          <View style={styles.view_img}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/dumbellicon.jpeg')}
            />
            <Text style={styles.text}>ONE REP MAX</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlerOnPress()}>
        <View style={styles.view_center}>
          <View style={styles.view_img}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/Report-PNG-Photos.png')}
            />
            <Text style={styles.text}>REPORT</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlerOnPress()}>
        <View style={styles.view_center}>
          <View style={styles.view_img}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/fatcalculate.jpeg')}
            />
            <Text style={styles.text}>FAT CALCULATOR</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlerOnPress()}>
        <View style={styles.view_center}>
          <View style={styles.view_img}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/bmr.webp')}
            />
            <Text style={styles.text}>BASIC METABOLIC RATE</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  view_center: {
    flex: 1,
    marginLeft: 10,
    height: 80,
    width: '95%',
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  view_img: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginLeft: 4,
    height: 70,
    width: 70,
    borderRadius: 50,
    resizeMode: 'stretch',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft: 30,
  },
});
