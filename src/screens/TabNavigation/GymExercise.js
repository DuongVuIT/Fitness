import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import CustomImage from '../../components/CustomImage';
const GymExercise = ({navigation}) => {
  return (
    <ScrollView overScrollMode="never">
      <View style={styles.container}>
        <CustomImage
          onPress={() => navigation.navigate('CHEST')}
          source={require('../../../assets/images/chest.jpg')}
          text="CHEST"
        />
        <CustomImage
          onPress={() => navigation.navigate('Shoulder')}
          source={require('../../../assets/images/shoulder.jpg')}
          text="Shoulder"
        />
        <CustomImage
          onPress={() => navigation.navigate('Back')}
          source={require('../../../assets/images/back.jpg')}
          text="BACK"
        />
        <CustomImage
          onPress={() => navigation.navigate('Leg')}
          source={require('../../../assets/images/Legs.jpg')}
          text="LEG"
        />
        <CustomImage
          onPress={() => navigation.navigate('Biceps')}
          source={require('../../../assets/images/biceps.jpg')}
          text="BICEPS"
        />
        <CustomImage
          source={require('../../../assets/images/triceps.jpg')}
          text="TRICEPS"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default GymExercise;
