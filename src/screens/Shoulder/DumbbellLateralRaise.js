import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import CustomExercise from '../../components/CustomExercise';

export default function DumbbellLateralRaise() {
  const data = {
    img: require('../../../assets/gif/shoulder/DumbbellLateralRaise.gif'),
    heading: 'Shoulder',
    workout: 'Dumbbell Lateral Raise',
    description:
      'Stand straight with the dumbbells at your hips.\n\n1. Take a deep breath and lift your hands up, until they are shoulder length.\n\n2.Go back to the starting position and breathe out\n',
    note: "You can keep your hand in the upper part of the movement so you don't put any additional pressure on your shoulders.\n\nHold your elbows sightly bent so you don't burden them additional",
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
