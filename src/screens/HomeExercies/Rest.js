import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Rest() {
  const navigation = useNavigation();
  const route = useRoute();
  const exercises = route.params.exercises;
  console.log(route.params.exercises);
  let timer = 0;
  const [time, setTime] = useState(8);
  const startTime = () => {
    setTimeout(() => {
      if (time <= 0) {
        navigation.navigate('fit', {
          exercises: route.params.exercises,
        });
        console.log('goback', exercises);
        clearTimeout(timer);
      }
      setTime(time - 1);
    }, 1000);
  };
  useEffect(() => {
    startTime();
    return () => clearTimeout(timer);
  });
  return (
    <SafeAreaView>
      <Image
        source={{
          uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png',
        }}
        style={{height: 400, width: '100%'}}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: 30,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        Take a break
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 40,
        }}>
        {time}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
