import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface NextArrowProps {
  onPress: () => void;
  disabled: boolean;
}

const NextArrow: React.FC<NextArrowProps> = ({ onPress, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Icon name="arrow-forward" size={30} color={disabled ? '#ccc' : '#000'} />
    </TouchableOpacity>
  );
};

export default NextArrow;
