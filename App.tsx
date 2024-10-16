import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import UserScreen from './src/screens/UserScreen';
import AdminScreen from './src/screens/AdminScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="User" component={UserScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Admin" component={AdminScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
