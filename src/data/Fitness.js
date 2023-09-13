import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {DATA_EXCERSICES} from './FakeData';
export default function Fitness() {
  const navigation = useNavigation();
  console.log(DATA_EXCERSICES[0].excersises);
  return (
    <View>
      {DATA_EXCERSICES.map((item, key) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Workout', {
              image: item.image,
              exercises: item?.excersises,
              id: item.id,
            })
          }
          key={key.toString()}>
          <Image
            style={{width: '100%', height: 200, marginTop: 5}}
            source={{uri: item.image}}
          />
          <Text
            style={{
              position: 'absolute',
              fontSize: 20,
              color: 'white',
              left: 20,
              top: 25,
              fontWeight: 'bold',
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
