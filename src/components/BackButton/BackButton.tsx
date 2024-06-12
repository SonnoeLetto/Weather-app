import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { getIconByName } from 'src/helpers';
import { styles } from './styles';

type BackButtonProps = {
  title: string;
  onPressButton: () => void;
};

export const BackButton: React.FC<BackButtonProps> = ({ title, onPressButton }) => {
  const Back = getIconByName('back');
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPressButton}>
      <Back width={26} height={26} />
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};
