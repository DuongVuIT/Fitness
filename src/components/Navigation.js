import React from 'react';
import Home from '../screens/User/Home';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import InclineBench from '../screens/Chest/InclineBench';
import Shoulder from '../screens/Shoulder/Shoulder';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/User/Login';
import Register from '../screens/User/Register';
import BenchPress from '../screens/Chest/BenchPress';
import Workout from '../screens/TabNavigation/Workout';
import Dumbell from '../screens/Chest/Dumbell';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {Alert, View} from 'react-native';
import GymExercise from '../screens/TabNavigation/GymExercise';
import HomeExercise from '../screens/TabNavigation/HomeExercise';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Chest from '../screens/Chest/Chest';
import DumbbellLateralRaise from '../screens/Shoulder/DumbbellLateralRaise';
import DumbbellShrugs from '../screens/Shoulder/DumbbellShrugs';
import DumbbellFrontRaise from '../screens/Shoulder/DumbbellFrontRaise';
import Back from '../screens/Back/Back';
import LatPullDown from '../screens/Back/LatPullDown';
import SeatCableRow from '../screens/Back/SeatCableRow';
import Leg from '../screens/Leg/Leg';
import BarbellSquat from '../screens/Leg/BarbellSquat';
import HammerCurl from '../screens/Bicep/HammerCurl';
import Bicep from '../screens/Bicep/Bicep';
import Ultility from '../screens/Ultility/Ultility';
import BmiCalculator from '../screens/Ultility/BmiCalculator';
import Neck from '../screens/Neck/Neck';
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomNavigation({navigation}) {
  return (
    <DrawerContentScrollView>
      <View style={{flex: 1, marginTop: 20}}>
        <DrawerItem
          label="Home"
          icon={() => <FontAwesome5 name="home" size={20} color="black" />}
          onPress={() => navigation.navigate('HOME')}
        />

        <DrawerItem
          label="Exercise"
          icon={() => <FontAwesome5 name="dumbbell" size={20} color="black" />}
          onPress={() => navigation.navigate('Exercises')}
        />
        <DrawerItem
          label="Ultility"
          icon={() => (
            <FontAwesome5 name="calculator" size={20} color="black" />
          )}
          onPress={() => navigation.navigate('Ultility')}
        />
        <DrawerItem
          label="Log out"
          icon={() => (
            <FontAwesome5 name="arrow-circle-left" size={20} color="black" />
          )}
          onPress={() => {
            Alert.alert('Log Out', 'Are you sure you want to log out?', [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Log Out',
                onPress: () => navigation.navigate('Login'),
              },
            ]);
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}
function GymDetails() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="1" options={{header: () => null}} component={Chest} />
    </Stack.Navigator>
  );
}
function ExerciseOnTop() {
  const route = useRoute();
  return (
    <TopTab.Navigator
      screenOptions={{tabBarLabelStyle: {fontSize: 16, color: 'black'}}}>
      <TopTab.Screen name="Gym" component={GymExercise} />
      <TopTab.Screen name="Home" component={HomeExercise} />
      <TopTab.Screen name="Workout" component={Workout} />
    </TopTab.Navigator>
  );
}
function ExerciseStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chest"
        options={{header: () => null}}
        component={GymDetails}
      />
    </Stack.Navigator>
  );
}
function Exercise() {
  const route = useRoute();
  const {uid} = route?.params;
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        drawerStyle: {
          width: 250,
        },
      }}
      drawerContent={props => <CustomNavigation {...props} />}>
      <Drawer.Screen name="HOME" initialParams={{uid}} component={Home} />
      <Drawer.Screen
        name="Exercises"
        initialParams={{uid}}
        component={ExerciseOnTop}
      />
      <Drawer.Screen name="Ultility" component={Ultility} />
    </Drawer.Navigator>
  );
}
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Exercise"
          component={Exercise}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="CHEST"
          options={{headerTitle: 'Chest'}}
          component={ExerciseStack}
        />
        <Stack.Screen
          name="BenchPress"
          options={{headerTitle: 'Bench Press'}}
          component={BenchPress}
        />
        <Stack.Screen
          name="incline"
          options={{headerTitle: 'Incline Bench Press'}}
          component={InclineBench}
        />
        <Stack.Screen
          name="Dumbell"
          options={{headerTitle: 'Incline Dumbbell Bench Press'}}
          component={Dumbell}
        />
        <Stack.Screen
          name="Shoulder"
          options={{headerTitle: 'Shoulder'}}
          component={Shoulder}
        />
        <Stack.Screen name="Back" component={Back} />
        <Stack.Screen
          name="Dumbbell Lateral Raise"
          component={DumbbellLateralRaise}
        />
        <Stack.Screen name="Dumbbell Shrugs" component={DumbbellShrugs} />
        <Stack.Screen
          name="Dumbbell Front Raise"
          component={DumbbellFrontRaise}
        />
        <Stack.Screen name="Lat Pulldown" component={LatPullDown} />
        <Stack.Screen name="SeatCableRow" component={SeatCableRow} />
        <Stack.Screen name="Leg" component={Leg} />
        <Stack.Screen name="BarbellSquat" component={BarbellSquat} />
        <Stack.Screen name="Biceps" component={Bicep} />
        <Stack.Screen name="HammerCurl" component={HammerCurl} />
        <Stack.Screen
          name="Bmi"
          options={{headerTitle: 'BMI CALCULATOR'}}
          component={BmiCalculator}
        />
        <Stack.Screen name="Neck" component={Neck} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;