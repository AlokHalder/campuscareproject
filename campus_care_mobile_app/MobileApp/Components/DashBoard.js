import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function Root() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#008080'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
function DashBoard({navigation, route}) {
  return (
    <Drawer.Navigator
      initialRouteName="Root"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Root" component={Root} />
      {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
    </Drawer.Navigator>
  );
}

export default DashBoard;
