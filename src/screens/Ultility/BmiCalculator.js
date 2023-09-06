import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icomoon from 'react-native-icomoon';
import selection from '../../components/icons/selection.json';
import {TextInput} from 'react-native-gesture-handler';
import {Image} from 'react-native';

export default function BmiCalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmI] = useState('');
  function Increase() {
    setWeight(weight + 1);
  }
  function ReduceCount() {
    if (weight > 0) {
      setWeight(weight - 1);
    }
  }
  function HeightIncrease() {
    setHeight(height + 1);
  }
  function HeightReduce() {
    if (height > 0) {
      setHeight(height - 1);
    }
  }
  function Calculator() {
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);

    if (!isNaN(parsedWeight) && !isNaN(parsedHeight) && parsedHeight > 0) {
      const heightInMeters = parsedHeight / 100;
      const bmi = parsedWeight / (heightInMeters * heightInMeters);
      const roundedBmi = bmi.toFixed(2);
      setBmI(roundedBmi);
    } else {
      setBmI('Invalid input');
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <View style={styles.view_weight}>
            <Text style={styles.text_weight}>WEIGHT(KG)</Text>
            <TextInput
              placeholder="0"
              placeholderTextColor={'black'}
              style={styles.text_input}
              value={weight.toString()}
              keyboardType="numeric"
              onChangeText={text => setWeight(parseInt(text) || 0)}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View style={{marginRight: 45}}>
                <TouchableOpacity onPress={ReduceCount}>
                  <Icomoon
                    name="minus"
                    size={30}
                    color="blue"
                    iconSet={selection}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={Increase}>
                  <Icomoon
                    name="plus"
                    size={30}
                    color="blue"
                    iconSet={selection}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.view_weight}>
            <Text style={styles.text_weight}>HEIGHT(CM)</Text>
            <TextInput
              placeholder="0"
              placeholderTextColor={'black'}
              style={styles.text_input}
              value={height.toString()}
              keyboardType="numeric"
              onChangeText={text => setHeight(parseInt(text) || 0)}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View style={{marginRight: 45}}>
                <TouchableOpacity onPress={HeightReduce}>
                  <Icomoon
                    name="minus"
                    size={30}
                    color="blue"
                    iconSet={selection}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={HeightIncrease}>
                  <Icomoon
                    name="plus"
                    size={30}
                    color="blue"
                    iconSet={selection}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bmi_container}>
          <Text
            style={{
              marginLeft: 10,
              color: 'black',
              fontSize: 20,
            }}>
            BMI: {bmi}
          </Text>
        </View>
        <View style={styles.bmi_table_container}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../../assets/images/bmi.jpg')}
              style={{height: 40, width: 40, marginLeft: 5, marginTop: 5}}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                marginLeft: 10,
                marginTop: 10,
              }}>
              BMI TABLE
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={styles.text_range}>BMI RANGE</Text>

            <Text style={styles.text_category}>CATEGORY</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={styles.text_range}>
              Less than 16 {'\n\n'}
              16 - 18.5 {'\n\n'}
              18.5 - 25{'\n\n'}
              25 - 30{'\n\n'}
              About 30{'\n\n'}
            </Text>

            <Text style={styles.text_category}>
              Severely Underweight {'\n\n'}
              Underweight {'\n\n'}
              Normal{'\n\n'}
              Overweight{'\n\n'}
              Obese{'\n\n'}
            </Text>
          </View>
        </View>
        <View style={styles.containerBmi}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../../assets/images/iconinfo.jpg')}
              style={{height: 40, width: 40, marginLeft: 5, marginTop: 10}}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                marginLeft: 10,
                marginTop: 10,
              }}>
              INFORMATION
            </Text>
          </View>

          <View>
            <Text style={styles.information}>
              - BMI is a measurement of a person's leanness of corpulence based
              on their height and weight, and is intended to quantify tissues
              mass.{'\n'}- It is widely used as a general indicator of whether a
              person has a healthy body weight for their height. Specifically,
              the value obtained from the calculation of BMI is used to
              categorize whether a person is underweight, normal weight,
              overweight, or obese depending on what range the value falls
              between.{'\n'}- There ranges of BMI vary based on factors such as
              region and age, and are sometimes further divided into
              subcategories such as severely underweight or very severely obese.
              Being overweight or underweight can have significant health
              effects, so while BMI is an imperfect measure of healthy body
              weight, it is a useful indicator of whether any additional testing
              or action is required.{'\n'} - Refer to the above table to see the
              different categories based on BMI that are used by the calculator.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          marginTop: 10,
          backgroundColor: '#0000ff',
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <TouchableOpacity onPress={Calculator}>
          <Text style={{fontSize: 20, color: 'white'}}>CALCULATOR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  view_weight: {
    flex: 1,
    height: 150,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  text_weight: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    marginTop: 10,
  },
  text_input: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
  },
  bmi_container: {
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  bmi_table_container: {
    marginLeft: 7,
    marginRight: 7,
    flex: 1,
    height: 330,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  text_range: {
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    width: '40%',
  },
  text_category: {
    color: 'black',
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    width: '60%',
    textAlign: 'center',
  },
  containerBmi: {
    marginLeft: 7,
    marginRight: 7,
    flex: 1,
    height: 580,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  information: {
    width: '100%',
    color: 'black',
    fontSize: 18,
    textAlign: 'justify',
  },
});
