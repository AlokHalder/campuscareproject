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
      <Drawer.Screen name="My Profile" component={ProfileScreen} />
      <Drawer.Screen name="Aboute Us" component={ProfileScreen} />
      <Stack.Screen name="Student" component={SettingsScreen} />
      {/* student dashboard */}
      <Stack.Screen name="Attendance" component={SettingsScreen} />
       {/* View of marks */}
       <Stack.Screen name="SemesterMarks" component={SettingsScreen} /> 
       {/* Application Status */}
       <Stack.Screen name="Application" component={SettingsScreen} /> 

       <Stack.Screen name="Course Curriculum" component={SettingsScreen} /> 

       <Stack.Screen name="Class Time Table" component={SettingsScreen} />
        {/* Training Module */}
       <Stack.Screen name="Practical Training Schedule" component={SettingsScreen} /> 
       <Stack.Screen name="Training Feedback" component={SettingsScreen} /> 
       <Stack.Screen name="Placement Notification" component={SettingsScreen} /> 
       <Stack.Screen name="Apprentice Training" component={SettingsScreen} /> 
       <Stack.Screen name="InternShip" component={SettingsScreen} /> 
       <Stack.Screen name="complain/Grievance" component={SettingsScreen} /> 
      <Stack.Screen name="Facalties" component={SettingsScreen} />
      <Stack.Screen name="Announcement" component={SettingsScreen} />
      <Stack.Screen name="Downloads" component={SettingsScreen} />
      <Stack.Screen name="Contacts" component={SettingsScreen} />
      <Stack.Screen name="Logout" component={SettingsScreen} />
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
