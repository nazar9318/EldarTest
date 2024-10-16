import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { appStyles } from '../styles/ComponentStyles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const MyButton: React.FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <TouchableOpacity style={appStyles.button} {...props}>
      <Text style={appStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
