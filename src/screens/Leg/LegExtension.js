import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomExercise from '../../components/CustomExercise';
export default function LegExtension() {
  const data = {
    img: require('../../../assets/gif/leg/legextension.gif'),
    heading: 'Quadriceps',
    workout: 'Leg Extension',
    description:
      'Sit on a machine. Hold the side grips, and put your ankles the platform made for them.\n\n1. Take a deep breath and lift your shins until they are parallel with the floor.\n\n2. Return your shins back in the starting position and breathe out.',
    note: 'Rotate your feet outwards so you hit that inner parts of the quadriceps. Rotate your feet inwards to hit the outer part of the quadriceps. If you have any back problems you can do this instead of the squat.\n\nConcentrate on those slow negative parts of the movement.\n\nHold your legs in the upper part of the movement to additionary hit the muscle.',
  };
  return (
    <View style={styles.container}>
      <CustomExercise
        imageSource={data.img}
        bodyPart={data.heading}
        workout={data.workout}
        description={data.description}
        note={data.note}
        scrollViewHeight={600}
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
