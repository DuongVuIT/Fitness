import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomExercise from '../../components/CustomExercise';
export default function OverHead() {
  const data = {
    img: require('../../../assets/gif/triceps/overhead.gif'),
    heading: 'Triceps',
    workout: 'Over Head',
    description:
      'Sit on the bench, keep your back staright and your feet on the floor.You can lean on the bench if you want. Hold the dumbbell with your hands by putting them on just one side of the dumbbell. Lift it above your head.\n\n1. Breathe in and bend your elbows so you lower the dumbbell behind your head.\n\nReturn the dumbbell in the starting position and breathe out',
    note: "Don't move your upper arms during the movement.\n\nIn the upper part of the movement flex your triceps as much as possible .",
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
