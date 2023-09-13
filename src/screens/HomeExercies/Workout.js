import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Workout() {
  const route = useRoute();
  const navigation = useNavigation();
  // console.log(route.params.exercises);
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <Image
          style={{width: '100%', height: 200}}
          source={{uri: route.params.image}}
        />
        {route.params.exercises?.map((item, key) => (
          <Pressable
            style={{margin: 10, flexDirection: 'row', alignItems: 'center'}}
            key={key}>
            <Image
              source={{uri: item.image}}
              style={{height: 120, width: '30%'}}
            />
            <View>
              <Text style={{marginLeft: 10}}>{item.name}</Text>
              <Text style={{marginLeft: 10, fontSize: 17, color: 'black'}}>
                x{item.sets}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
        onPress={() =>
          navigation.navigate('fit', {
            exercises: route.params.exercises,
          })
        }
        style={{
          backgroundColor: 'blue',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 10,
          width: 150,
          borderRadius: 30,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 600,
          }}>
          Start
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
