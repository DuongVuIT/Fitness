import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomExercise from '../../components/CustomExercise';
export default function HammerCurl() {
  const data = {
    img: require('../../../assets/gif/biceps/hammercurl.gif'),
    heading: 'Bicep',
    workout: 'Hammer Curl',
    description:
      'Sit on a bench or stand with the dumbbells in your hands. Rotate your palms inwards.\n\n1. Take a deep breath and do a curl.\n\n2. Return the dumbbell in the starting position and breathe out.',
    note: 'You can do this exercise with a barbell that is specifically made for this.\n\nYou can keep your hand in the upper part of the movement because that works the muscle even better.\n\nConcentrate on those slow negative parts of the movement.',
  };

  return (
    <View style={styles.container}>
      <CustomExercise
        imageSource={data.img}
        bodyPart={data.heading}
        workout={data.workout}
        description={data.description}
        note={data.note}
        scrollViewHeight={540}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
