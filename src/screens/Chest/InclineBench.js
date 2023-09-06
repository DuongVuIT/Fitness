import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import CustomExercise from '../../components/CustomExercise';
export default function InclineBench() {
  const data = {
    img: require('../../../assets/gif/chest/developpe-incline-barre.gif'),
    heading: 'Chest',
    workout: 'Incline Bench Press',
    description:
      'Lay on an incline bench angled between 45 to 60 degrees. Keep your glutes on the bench, and your feet on the ground.\n\n1. Take the barbell with your hands extended at shoulder with\n\n2. Breathe in and lower the barbell on the upper chest.\n\n3. Lift the barbell back on the starting position and breathe out.',
    note: 'Put your shoulder against the bench and push them towards your latissimus.That way the negative part of the movement will ben a bit more stable.\n\nUse leg drive - push your legs off the floor. That will make you use your whole body and enable you to lift more.\n\nNegative parts should be done slowly so that you hit your chest more and maximize their growth.\n\nImagine doing the dumbbell bench press and try to bring your forearms to pronation position. Try to bend the barbell (figuratively). That will, as an effect activate your primary muscles more and maximize their growth.',
  
isLike:false  };
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
