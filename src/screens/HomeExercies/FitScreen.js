import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image} from 'react-native';

export default function FitScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const exercises = route.params.exercises;
  const current = exercises?.[index];
  console.log('current', current);
  return (
    <SafeAreaView>
      <Image
        source={{uri: current.image}}
        style={{width: '100%', height: 370}}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: 10,
        }}>
        {current.name}
      </Text>
      <Text
        style={{
          fontSize: 30,
          marginLeft: 'auto',
          marginRight: 'auto',
          fontWeight: 'bold',
          marginTop: 20,
        }}>
        x{current.sets}
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('rest', {
            exercises: route.params.exercises,
          })
        }
        style={{
          backgroundColor: 'blue',
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: 40,
          width: 150,
          borderRadius: 30,
        }}>
        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>
          Done
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
