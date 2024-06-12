import type { FC } from 'react';
import { SvgProps } from 'react-native-svg';

// icons
import home from 'assets/icons/home.svg';
import storm from 'assets/icons/storm.svg';
import plus from 'assets/icons/plus.svg';
import back from 'assets/icons/back.svg';

const icons = {
  // icons
  home,
  storm,
  plus,
  back,
};

export type IconType = keyof typeof icons;

export const getIconByName = (name: IconType): FC<SvgProps> => {
  return icons[name];
};
