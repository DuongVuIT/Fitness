import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomExercise from '../../components/CustomExercise';
export default function Hacksquat() {
  const data = {
    img: require('../../../assets/gif/leg/Barbell-Hack-Squat.gif'),
    heading: 'Quadriceps',
    workout: 'Hack Squat',
    description:
      'Stand upwards with the barbell behind your back. Take the same position as you would when doing deadlifts while holding the barbell with an overgrip.\n\n1. Take a deep breath and staighten your legs until your body is perfectly staight.\n\n2. Go back to the starting position and breathe out.',
    note: "Don't put the weight too far from your legs because that will result in an excess back rounding arm-up good before doing this exercises so that your movement becomes more fluid and stable.\n\nConcentrate on those slow negative parts of the movement, and use a belf if you are using heavier weight.",
  };
  return (
    <View style={styles.container}>
      <CustomExercise
        imageSource={data.img}
        bodyPart={data.heading}
        workout={data.workout}
        description={data.description}
        note={data.note}
        scrollViewHeight={580}
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
