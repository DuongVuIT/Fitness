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
  const [disabled, setDisabled] = useState(false);
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
      {index + 1 >= exercises.length ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('homefit', {
              exercises: route.params.exercises,
            });
          }}
          style={{
            backgroundColor: 'blue',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 40,
            width: 150,
            borderRadius: 30,
          }}>
          <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>
            DONE
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('rest', {
              exercises: route.params.exercises,
            });
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{
            backgroundColor: 'blue',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 40,
            width: 150,
            borderRadius: 30,
          }}>
          <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>
            DONE
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <TouchableOpacity
          disabled={index === 0}
          onPress={() => {
            navigation.navigate('rest', {
              exercises: route.params.exercises,
            });
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{
            backgroundColor: 'green',
            padding: 10,
            marginHorizontal: 20,
            borderRadius: 30,
            marginTop: 20,
            width: 120,
          }}>
          <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
            PREV
          </Text>
        </TouchableOpacity>
        {index + 1 >= exercises.length ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('homefit', {
                exercises: route.params.exercises,
              });
            }}
            style={{
              backgroundColor: 'green',
              padding: 10,
              marginHorizontal: 20,
              borderRadius: 30,
              marginTop: 20,
              width: 120,
            }}>
            <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
              SKIP
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('rest', {
                exercises: route.params.exercises,
              });
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{
              backgroundColor: 'green',
              padding: 10,
              marginHorizontal: 20,
              borderRadius: 30,
              marginTop: 20,
              width: 120,
            }}>
            <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
              SKIP
            </Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
