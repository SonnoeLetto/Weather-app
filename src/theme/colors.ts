export const COLORS = {
  // red
  red: 'red',
  red_ff0000: '#FF0000',
  red_border: '#FF0037',
  red_33: '#ED0033',
  red_errorText: '#ED0033',
  alert: '#ED4F32',

  // gray
  gray: 'gray',
  gray_border: '#676779',
  gray_3: '#434753',
  gray_layer: '#ffffff8a',
  gray_79: '#676779',

  // white
  white: '#FFFFFF',

  //blue
  blue_28: '#141928',
  cyan: '#96FFF5',
  blue_48: '#2D3548',
  blue_c4: '#1AAFC4',
  blueBackgroundWithOpacity: 'rgba(20, 25, 40, 0.8)',
  blueBackgroundWithoutOpacity: 'rgba(20, 25, 40, 1)',

  // balck
  black: '#000',
  black_50: '#C4C5C9',

  // yellow
  yellow: '#f4d73f',

  //transparent
  transparent: 'transparent',
};

export type ColorType = keyof typeof COLORS;
