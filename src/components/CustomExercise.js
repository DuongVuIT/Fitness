import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const CustomExercise = ({
  imageSource,
  bodyPart,
  workout,
  description,
  note,
  scrollViewHeight,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.view_image}>
        <Image style={styles.image} source={imageSource} />
      </View>
      <View style={styles.contentContainer}>
        <ScrollView style={styles.container_content}>
          <View style={(styles.textContainer, {height: scrollViewHeight})}>
            <Text style={styles.title}>BODYPART:</Text>
            <Text style={styles.content}>{bodyPart}</Text>
            <Text style={styles.title}>WORKOUT:</Text>
            <Text style={styles.workoutText}>{workout}</Text>
            <Text style={styles.title}>DESCRIPTION:</Text>
            <Text style={styles.content}>{description}</Text>
            <Text style={styles.title}>NOTE:</Text>
            <Text style={styles.content}>{note}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  view_image: {
    borderWidth: 0.2,
    width: 385,
    marginLeft: 5,
    height: 300,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: 250,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeText: {
    flexDirection: 'row',
    fontSize: 25,
    color: 'black',
  },
  contentContainer: {
    borderWidth: 0.2,
    borderRadius: 10,
    flex: 1,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
  },
  container_content: {
    flex: 1,
  },
  textContainer: {
    height: 900,
    marginTop: 10,
    marginLeft: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: 3,
  },
  content: {
    color: 'black',
    fontSize: 18,
    marginLeft: 5,
    textAlign: 'justify',
    marginRight: 5,
  },
  workoutText: {
    color: 'black',
    fontSize: 18,
    marginLeft: 5,
    textAlign: 'justify',
    marginRight: 5,
  },
});

export default CustomExercise;
