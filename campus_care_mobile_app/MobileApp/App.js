//App


  import * as React from 'react';
  import Login from "./Components/Login";
  import Dashboard from "./Components/DashBoard";
  import {
    StyleSheet
  } from 'react-native';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';


 const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView style={styles.scrollView}>
    // <DeContext.Provider>
   
    // <Login/>
       <NavigationContainer>
         
        { <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
          />
        </Stack.Navigator> }
      </NavigationContainer> 
   
    // </DeContext.Provider>
    //   </ScrollView>
    // </SafeAreaView>
  );

};



export default App;
