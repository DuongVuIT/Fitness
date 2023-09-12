import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
const CustomImage = ({onPress, source, text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewImg}>
        <TouchableOpacity activeOpacity={1} onPress={onPress}>
          <ImageBackground source={source} style={styles.image}>
            <View style={styles.textCenter}>
              <Text style={styles.text}>{text}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewImg: {
    flex: 1,
    borderWidth: 1,
    height: 200,
    marginTop: 5,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  textCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    marginLeft: '50%',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
export default CustomImage;
