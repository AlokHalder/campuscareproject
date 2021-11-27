import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

function Login({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image: {
      marginBottom: 40,
    },

    inputView: {
      backgroundColor: '#F0F0EB',
      // borderRadius: 30,
      width: '100%',
      height: 45,
      marginBottom: 20,

      alignItems: 'center',
    },

    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,

    },

    loginText: {
      fontSize: 20,
    },

    forgot_button: {
      height: 30,
      marginBottom: 30,

    },
    signUpBtn: {
      marginTop: 2,
      marginLeft: 5

    },

    loginBtn: {
      width: '100%',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      backgroundColor: '#C9C9C9',
    },
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        width={50}
        height={50}
        source={require('../assets/BRAIT.png')}
      />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DashBoard', { name: 'Alok Pcs Global' })
        }
        style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View>
        <Text> Don't have an account?
          <TouchableOpacity
          >
            <Text style={styles.signUpBtn}>
              Register Now
            </Text>
          </TouchableOpacity>
        </Text>

      </View>
    </View>
  );
}

export default Login;
