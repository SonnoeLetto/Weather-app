import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/theme';

export const styles = StyleSheet.create({
  cityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    width: '100%',
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: COLORS.yellow,
  },
  cityText: {
    fontSize: 14,
    fontFamily: FONTS.YBIBold,
    color: COLORS.black,
  },
});
