import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomExercise from '../../components/CustomExercise';
export default function Ropedown() {
  const data = {
    img: require('../../../assets/gif/triceps/Ropedown.gif'),
    heading: 'Triceps',
    workout: 'Rope Pressdown',
    description:
      "Stand while being turned towards the machine.Put your hands on the extension you are doing the exercise with and keep your elbows against your body all the time\n\n1. Take a deep breathe and extend your arms. Don't let your elbows get away from your body.\n\n2. Return the cable in the starting position and breathe out.",
    note: 'Concentrate on those slow negative parts of the movement.\n\nCombine different extensions like the long and shorts barbells,rope...\n\nIf you are doing this exercise using a heavy weight, lean your upper body forward for that added stability.',
  };
  return (
    <View style={styles.container}>
      <CustomExercise
        imageSource={data.img}
        bodyPart={data.heading}
        workout={data.workout}
        description={data.description}
        note={data.note}
        scrollViewHeight={600}
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
