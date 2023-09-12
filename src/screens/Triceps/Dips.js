import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomExercise from '../../components/CustomExercise';
export default function Dips() {
  const data = {
    img: require('../../../assets/gif/triceps/dips.gif'),
    heading: 'Triceps',
    workout: 'Dips',
    description:
      'Your hands should be straight, and you should lean on them, pushing your upper body forward.\n\n1. Take a deep breathe and bend your elbows, then lower body as much as possible.\n\n 2. Return to the starting position and breathe out.',
    note: 'The more you lean forward the more you will hit your chest muscles. If your upper body is staight, triceps will be hit more than chest.\n\nTry to join your hands during the movement, especially during the negatives. That will additionally hit chest and maximize your result',
  };
  return (
    <View style={styles.container}>
      <CustomExercise
        imageSource={data.img}
        bodyPart={data.heading}
        workout={data.workout}
        description={data.description}
        note={data.note}
        scrollViewHeight={510}
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
