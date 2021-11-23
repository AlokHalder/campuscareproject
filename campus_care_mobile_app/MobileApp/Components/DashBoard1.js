import 'react-native-gesture-handler';

import * as React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

import {Text, View} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Setting Page'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Details Page'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
  );
}

function Dashboard({navigation, route}) {
  return (
    <>
      <View>
        <Text>Welcome {route.params.name}</Text>
      </View>

      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="SettingsStack" component={SettingsStack} />
      </Tab.Navigator>
    </>
  );
}
export default Dashboard;
