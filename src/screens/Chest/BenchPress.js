import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomExercise from '../../components/CustomExercise';
const BenchPress = () => {
  const data = {
    img: require('../../../assets/gif/chest/barbell-bench-press.gif'),
    heading: 'Chest',
    workout: 'Bench Press',
    description:
      'Lay on a flat bench. Hold your glutes on the bench, and your feet on the floor. Arch your back to activate lower chest more and that way lift a heavier weight.\n\n1. Take the barbell with your arms extended more than shoulder width.\n\n2. Take a deep breath and slowly lower the barbell on your chest.\n\n3. Return the barbell to the starting position and breathe out.',
    note: 'Put your shoulder against the bench and push them towards your latissimus.That way the negative part of the movement will ben abit more stable.\n\nUse leg drive - push your legs off the floor.That will make you use your whole body and enable you to lift more.\n\nNegative parts should be done slowly so that you hit your chest more and maximize their growth.\n\nImagine doing the dumbbell bench press and try to bring yourforearms to pronation position. Try to bend the barbell(figuratively). That will, as an effect activate your primary muscles more and maximize their growth.',
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
export default BenchPress;
