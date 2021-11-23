// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import DetailsScreen from './DetailsScreen';
import Notification from './Notification';
// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons/FontAwesome5';
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
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
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeStack"
        tabBarOptions={{
          activeTintColor: '#105773',
        }}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          title="Home"
          name="Home"
          options={{
            tabBarLabel: 'home',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
          component={HomeStack}
        />
        <Tab.Screen
          title="Pages"
          name="Pages"
          options={{
            tabBarLabel: 'page',
            tabBarIcon: ({color, size}) => (
              <Icon name="rocket" size={size} color={color} />
            ),
          }}
          component={HomeStack}
        />
        <Tab.Screen
          title="Elements"
          options={{
            tabBarLabel: 'elements',
            tabBarIcon: ({color, size}) => (
              <Icon name="adn" size={size} color={color} />
            ),
          }}
          name="Elements"
          component={HomeStack}
        />
        <Tab.Screen
          title="Chat"
          options={{
            tabBarLabel: 'chat',
            tabBarIcon: ({color, size}) => (
              <Icon name="sms" size={size} color={color} />
            ),
          }}
          name="Chat"
          component={HomeStack}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            tabBarLabel: 'settings',
            tabBarIcon: ({color, size}) => (
              <Icon name="cog" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          title="Nofication"
          tabBarOptions={{showIcon: true}}
          options={{
            tabBarLabel: 'nofication',
            tabBarBadge: 3,
            tabBarIcon: ({color, size}) => (
              <Icon name="bell" size={size} color={color} />
            ),
          }}
          name="Nofication"
          component={Notification}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default HomeScreen;
