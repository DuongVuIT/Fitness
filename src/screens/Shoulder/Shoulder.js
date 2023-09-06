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

export default function Shoulder({navigation}) {
  return (
    <ScrollView overScrollMode="never" style={{backgroundColor: '#ffffff'}}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Dumbbell Lateral Raise')}>
          <View style={styles.view_img}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.image}
              source={require('../../../assets/gif/shoulder/DumbbellLateralRaise.gif')}></ImageBackground>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Dumbbell Lateral Raise
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Dumbbell Shrugs')}>
          <View style={styles.view_img}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.image}
              source={require('../../../assets/gif/shoulder/DumbbellShrugs.gif')}></ImageBackground>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Dumbbell Shrugs
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Dumbbell Front Raise')}>
          <View style={styles.view_img}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.image}
              source={require('../../../assets/gif/shoulder/DumbbellFrontRaise.gif')}></ImageBackground>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Dumbbell Front Raise
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
