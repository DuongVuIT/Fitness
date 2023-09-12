import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomExercise from '../../components/CustomExercise';
export default function InvertedRow() {
  const data = {
    img: require('../../../assets/gif/back/Inverted-Row.gif'),
    heading: 'Back',
    workout: 'Inverted Row',
    description:
      'Lay on the floor under the Smith machine.The barbell needs to be on a height you can reach with your arms extended.\n\n1. Take the barbell and hold it with an overgrip, tighten your abs and keep your body straight.\n\n2. Breathe in and pull yourself up until you touch the barbell with your chest.\n\n3. Go back to the starting position and breathe out.',
    note: "Make sure your body is completed straight. To prevent it from not being straight you need to tighten your abs.\n\nDuring the movement try to separate your arms, even though you actually don't move them. That way you will activate your back muscles even better.\n\nAs time passes, put something on your belly to make the exercise harder.\n\nHold your body in place when you pull up so that you hit your chest more and maximize their growth",
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
