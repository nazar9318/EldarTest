import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface PrevArrowProps {
  onPress: () => void;
  disabled: boolean;
}

const PrevArrow: React.FC<PrevArrowProps> = ({ onPress, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Icon name="arrow-back" size={30} color={disabled ? '#ccc' : '#000'} />
    </TouchableOpacity>
  );
};

export default PrevArrow;
