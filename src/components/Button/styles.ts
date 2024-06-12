import { StyleSheet } from 'react-native';
import { COLORS, FONTS, DIMENSIONS } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS.width - 48,
    height: 52,
    marginLeft: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FONTS.YBIBold,
    color: COLORS.white,
  },
});
