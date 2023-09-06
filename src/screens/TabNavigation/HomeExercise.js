import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomImage from '../../components/CustomImage';
const HomeExercise = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <CustomImage
          onPress={() => navigation.navigate('Neck')}
          source={require('../../../assets/gif/neck/NeckRotation.gif')}
          text="Neck"
        />
      </View>
    </ScrollView>
  );
};

export default HomeExercise;
