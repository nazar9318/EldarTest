import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { appStyles } from '../styles/ComponentStyles';

const LoginTextInput: React.FC<TextInputProps> = (props) => {
  return (
    <View style={appStyles.inputContainer}>
      <TextInput
        {...props}
        style={[appStyles.input, props.style]}
        placeholderTextColor="#888"
      />
    </View>
  );
};

export default LoginTextInput;
