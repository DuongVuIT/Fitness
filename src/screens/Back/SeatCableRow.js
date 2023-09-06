import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomExercise from '../../components/CustomExercise';
export default function SeatCableRow() {
  const data = {
    img: require('../../../assets/gif/back/seatedcablerow.gif'),
    heading: 'Back',
    workout: 'Seat Cable Row',
    description:
      'Sit on a lat machine and with push of the surface with your legs. Hold the bar with an overgrip, tighten your core and bend the upper back outside.\n\n1. Take a deep breath and pull the extension until it touches your thorax.\n\n2. Return the extension in the starting position and breathe out.',
    note: "Don't let your back bend. Combine an undergrip and an overgrip so you hit the muscles from different angles.\n\nUse different extensions - long barbell, short barbell, V - extension...\n\nHold the barbell on your chest so you additionally hit your back and maximize their growth.\n\nTry to separate your arms even though you are not really moving them. That will help you hit back muscles even more.",
  };
  return (
    <View style={styles.container}>
      <CustomExercise
        imageSource={data.img}
        bodyPart={data.heading}
        workout={data.workout}
        description={data.description}
        note={data.note}
        scrollViewHeight={700}
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
