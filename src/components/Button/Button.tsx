import React from 'react';
import { Text, TouchableOpacity, StyleProp, TextProps, ViewStyle } from 'react-native';
import { COLORS } from 'src/theme';
import { styles } from './styles';

type ButtonProps = {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextProps>;
  mode?: string;
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  title = 'button',
  buttonStyle,
  buttonTextStyle,
  mode = 'solid',
  onPress,
}) => {
  const containerStyle = [
    styles.container,
    buttonStyle,
    {
      borderWidth: mode !== 'solid' ? 2 : 0,
      borderColor: COLORS.black,
      backgroundColor: mode !== 'solid' ? COLORS.yellow : COLORS.black,
    },
  ];

  const textStyle = [
    styles.buttonText,
    buttonTextStyle,
    {
      color: mode !== 'solid' ? COLORS.black : COLORS.white,
    },
  ];

  return (
    <TouchableOpacity activeOpacity={0.8} style={containerStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
