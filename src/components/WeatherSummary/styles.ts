import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from 'src/theme';

export const styles = StyleSheet.create({
  tempText: {
    fontSize: 30,
    fontFamily: FONTS.YBIBold,
    color: COLORS.black,
    textAlign: 'center',
  },
  summaryContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 32,
  },
  summaryText: {
    fontSize: 14,
    fontFamily: FONTS.YBIMedium,
    color: COLORS.black,
    marginTop: 6,
  },
});
