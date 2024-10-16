import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { userAdminStyles } from '../styles/UserAdminStyles';

const AdminTextInput: React.FC<TextInputProps> = (props) => {
  return (
    <View style={userAdminStyles.editInputContainer}>
      <TextInput
        {...props}
        style={[userAdminStyles.editInput, props.style]}
        placeholderTextColor="#888"
      />
    </View>
  );
};

export default AdminTextInput;
