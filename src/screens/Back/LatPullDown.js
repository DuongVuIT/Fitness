import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomExercise from '../../components/CustomExercise';

export default function LatPullDown() {
  const data = {
    img: require('../../../assets/gif/back/latpulldown.gif'),
    heading: 'Back',
    workout: 'Lat Pulldown',
    description:
      'Sit on a lat machine and put your thigh on a surface. Hold the barbell with an overgrip, tighten your abs and bend your upper body outwards.\n\n1. Take a deep breathe and pull the barbell down until it touches your chest.',
    note: "Combine the undergrip and overgrip so you hit the muscles from different angles.\n\nUse different extensions - long barbell, short barbell, V - extension...\n\nHold the barbell on your chest so you additionally hit your back and maximize their growth.\n\nTry to separate your arms even through you don't really move them. That will help you hit back muscles even more.",
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
