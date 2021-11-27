// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';

const DetailsScreen = () => {
  const styles = StyleSheet.create({
    image: {
      marginBottom: 40,
    },
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={styles.image}
            width={120}
            height={120}
            source={require('../assets/BRAIT.png')}
          />
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              fontWeight:'bold',
              color: 'grey',
            }}>
            Dr. B.R. Ambedkar Institute of Technology
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
         Developed By
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'teal',
          }}>
         PERENNATION COMPUTER SOLUTIONS GLOBAL PRIVATE LIMITED
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default DetailsScreen;
