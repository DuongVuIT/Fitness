import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomExercise from '../../components/CustomExercise';
export default function DumbbellShrugs() {
  const data = {
    img: require('../../../assets/gif/shoulder/DumbbellShrugs.gif'),
    heading: 'Shoulder',
    workout: 'Dumbbell Shrugs',
    description:
      'Stand straight with the dumbbells in your hand. Your hand should be on your hips.Keep your hand straight and tighten your abs.\n\n1. Breathe in and pull your shoulder blades up and back as much as you can.\n\n2. Go back to the starting position and breathe out.',
    note: 'Concentrate on those slow negative parts of the movement.\n\nPush the shoulder joints back so you hit romboids.',
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
