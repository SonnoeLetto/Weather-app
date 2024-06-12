/* eslint no-var: 0 */

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png' {
  import { ImageSourcePropType } from 'react-native';
  const content: ImageSourcePropType | undefined;
  export default content;
}
