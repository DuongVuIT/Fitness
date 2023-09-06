import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomExercise from '../../components/CustomExercise';

export default function BarbellSquat() {
  const data = {
    img: require('../../../assets/gif/leg/barbellSquat.gif'),
    heading: 'Quadriceps',
    workout: 'Barbell Squat',
    description:
      "The most important thing while doing squats is exactly that proper form. With bad form you can injure your knees and lower back.\n\nLower back has to be tight while doing it. Your chest should point upwards, and you should look up during the whole movement. Upper back and abs need to be thighten the whole time\n\nDuring the movement it is very important for the knees not to pass over your toes. Of course, you wont't know how to do everything the first time you do exercise, so every training try to practice something new you couldn't do the last time\n\nTall people often have problems with squats. They are advised to stand with their heels on some kind of platform and to bend their upper body move during the movement.\n\n1. Take a deep breath and bend your thighs and knees until your thighs get little below your knees.\n\n2. Go back to the starting posistion and breathe out.",
    note: 'Warm up good before doing this exercise and do all of mobility exercises so that your movement becomes more fluid and stable.\n\nConcentrate on those slow negative parts of the movement.\n\nTry different widths of your stance. If your are taller the wide stance will probably be the best for you.\n\nUse braces for your knees to make the movement easier.\n\nBefore doing this exercise, massage your hamstrings, lower back and calves with the foam roller.',
  };
  return (
    <View style={styles.container}>
      <CustomExercise
        imageSource={data.img}
        bodyPart={data.heading}
        workout={data.workout}
        description={data.description}
        note={data.note}
        scrollViewHeight={1150}
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
