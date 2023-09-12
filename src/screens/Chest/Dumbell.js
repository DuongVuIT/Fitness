import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import React from 'react';

import CustomExercise from '../../components/CustomExercise';
const Dumbell = () => {
  const data = {
    img: require('../../../assets/gif/chest/Incline-Dumbbell-Press.gif'),
    heading: 'Chest',
    workout: 'Incline Dumbell Bench Press',
    description:
      "Lay on an incline bench. Angle should be less than 60 degrees so you don't put much strain on your front should. Gluteus should be touching the bench all the time, and your feet should be on the floor.\n\n1. Take a deep breath and lower the dumbbells to chest level and then rorate your forearms to bring your hands in pronation (rotate the forearms towards your body).\n\n2. Lift the dumbbells to the starting position and breathe out. ",
    note: 'Put your shoulder against the bench and push them towards your latissimus. That way the negative part of the movement will ben a bit more stable.\n\nNegative parts should be done slowly so that you hit your chest more and maximize their growth Avoid making a big range of motion with your lower back because that will activate your lower pertorials more...\n\nNegative parts should be done slowly so that you hit your chest more and maximize their growth.\n\nImagine doing the dumbbell bench press and try to bring your forearms to pronation position. Try to bend the barbel(figuratively). That will, as an effect activate your primary muscles more and maximize their growth.',
  };
  return (
    <View style={styles.container}>
      <CustomExercise
        imageSource={data.img}
        bodyPart={data.heading}
        workout={data.workout}
        description={data.description}
        note={data.note}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
export default Dumbell;
