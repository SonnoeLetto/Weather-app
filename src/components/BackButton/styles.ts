import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 62,
    backgroundColor: COLORS.yellow,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  titleText: {
    fontSize: 16,
    fontFamily: FONTS.YBIBold,
    color: COLORS.black,
    marginLeft: 12,
  },
});
