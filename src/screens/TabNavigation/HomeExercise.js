import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Fitness from '../../data/Fitness';
const HomeExercise = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <Fitness />
      </View>
    </ScrollView>
  );
};

export default HomeExercise;
