import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomExercise from '../../components/CustomExercise';
export default function DumbbellFrontRaise() {
  const data = {
    img: require('../../../assets/gif/shoulder/DumbbellFrontRaise.gif'),
    heading: 'Shoulder',
    workout: 'Dumbbell Front Raise',
    description:
      'Stand straight with the dumbbells on your thighs.\n\n1. Take a deep breath and lift two hand upwards, until it is shoulder width.\n\n2. Go back to the starting position and breathe out.',
    note: 'You can keep your hand in the upper part of the movement so it additionally hits the shoulders.\n\nConcentrate on those slow negative parts of the repetition',
  };
  return (
    <View style={styles.container}>
      <CustomExercise
        imageSource={data.img}
        bodyPart={data.heading}
        workout={data.workout}
        description={data.description}
        note={data.note}
        scrollViewHeight={500}
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
