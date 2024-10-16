import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import LoginTextInput from '../components/LoginTextInput';
import MyButton from '../components/MyButton';

const LoginScreen = ({ navigation }: any) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  const { login } = authContext;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      login('admin', username);
      navigation.navigate('Admin');
    } else if (username && password) {
      login('user', username);
      navigation.navigate('User');
    } else {
      alert('Por favor ingresa credenciales válidas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Por favor, ingrese nombre de usuario y contraseña para ingresar
      </Text>
      <LoginTextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <LoginTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <MyButton title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 20,
  },
});

export default LoginScreen;
