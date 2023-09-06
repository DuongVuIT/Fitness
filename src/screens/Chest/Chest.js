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

export default function Chest({navigation}) {
  return (
    <ScrollView overScrollMode="never" style={{backgroundColor: '#ffffff'}}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('BenchPress')}>
          <View style={styles.view_img}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.image}
              source={require('../../../assets/gif/chest/barbell-bench-press.gif')}></ImageBackground>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              BENCH PRESS
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('incline')}>
          <View style={styles.view_img}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.image}
              source={require('../../../assets/gif/chest/developpe-incline-barre.gif')}></ImageBackground>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              INCLINE BENCH PRESS
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Dumbell')}>
          <View style={styles.view_img}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.image}
              source={require('../../../assets/gif/chest/Incline-DB-Bench-Press-1.gif')}></ImageBackground>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              INCLIN DUMBBELL BENCH PRESS
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
