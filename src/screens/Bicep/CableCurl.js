import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomExercise from '../../components/CustomExercise';
export default function CableCurl() {
  const data = {
    img: require('../../../assets/gif/biceps/cable-curl.gif'),
    heading: 'Bicep',
    workout: 'Ez Bar Curl',
    description:
      'The cable curl is an isolation exercise for the biceps muscle. It’s a pulling action performed with a cable machine and is suitable for beginners.',
    note: 'The primary target of cable curl movement is the biceps brachii muscle. You can get wider, thicker arms by targeting the head of the biceps with this unique cable curling exercise. The cable keeps tension on your biceps during both the lowering and the lifting part of each rep so they are always engaged. The cable’s constant tension means you work your biceps hard.',
  };

  return (
    <View style={styles.container}>
      <CustomExercise
        imageSource={data.img}
        bodyPart={data.heading}
        workout={data.workout}
        description={data.description}
        note={data.note}
        scrollViewHeight={450}
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
