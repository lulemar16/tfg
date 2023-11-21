// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { logIn } from '../services/AuthService';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await logIn(email, password);
      console.log('User logged in:', user);
      // Navigate to the next screen or perform additional actions upon successful signup
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
