import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icomoon from 'react-native-icomoon';
import selection from '../../components/icons/selection.json';
export default function OneRepMax() {
  const [weight, setWeight] = useState(0);
  const [lbs, setLbs] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [kilo, setKg] = useState('');

  const renderItem = ({item}) => (
    <Text style={{textAlign: 'center', padding: 16}}>{item}</Text>
  );

  function calculateRepMax() {
    const parsedWeight = parseFloat(weight);

    if (!isNaN(parsedWeight) && parsedWeight > 0) {
      const itemHeight = 95;
      const index = Math.floor(scrollY / itemHeight);
      const selectedValue = data[index];
      console.log('Selected Value:', selectedValue);
      const lbs = weight * (1 + 0.0333 * selectedValue);
      console.log('lbs ' + lbs);
      setLbs(lbs.toFixed(2));
      setKg((lbs / 2.02436).toFixed(2));
      console.log(kilo);
    }
  }
  function Increase() {
    setWeight(weight + 1);
  }
  function ReduceCount() {
    if (weight > 0) {
      setWeight(weight - 1);
    }
  }
  const data = Array.from({length: 12}, (_, i) => i + 1);
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
            <Text style={styles.text_weight}>REP MAX</Text>
            {/* <ScrollPicker
              dataSource={data}
              selectedIndex={0}
              renderItem={data => {
                return (
                  <Text
                    style={{
                      fontSize: 20,
                      textAlign: 'center',
                      color: 'black',
                    }}>
                    {data}
                  </Text>
                );
              }}
              onValueChange={value => {
                setRep(value);
                // setSelectedvalue(value);
              }}
              wrapperBackground={'#FFFFFF'}
              itemHeight={100}
              highlightColor={'#d8d8d8'}
              highlightBorderWidth={0}
              itemColor={'#B4B4B4'}
            /> */}
            <ScrollView
              onScroll={event => setScrollY(event.nativeEvent.contentOffset.y)}>
              {data.map((item, index) => (
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: 30,
                    margin: 30,
                  }}
                  key={index}>
                  {item}
                </Text>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.bmi_container}>
          <Text
            style={{
              marginLeft: 10,
              color: 'black',
              fontSize: 20,
            }}>
            1RM
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: 'black',
            }}>{`${lbs} lbs = ${kilo} kg`}</Text>
        </View>
        <View style={styles.containerBmi}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../../assets/images/iconinfo.jpg')}
              style={{height: 40, width: 40, marginLeft: 5}}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                marginLeft: 10,
                // marginTop: 10,
              }}>
              INFORMATION
            </Text>
          </View>

          <View>
            <Text style={styles.information}>
              Type in the weight you have been using and the number of
              repetiotion which you used with that weight
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
        <TouchableOpacity onPress={() => calculateRepMax()}>
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
    marginTop: 10,
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
  },
  bmi_container: {
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  text_range: {
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    width: '40%',
  },
  containerBmi: {
    marginLeft: 7,
    marginRight: 7,
    flex: 1,
    height: 120,
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
