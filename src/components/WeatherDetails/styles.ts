import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 8,
    borderColor: COLORS.black,
    borderWidth: 3,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.yellow,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.black,
    fontFamily: FONTS.YBIBold,
    fontSize: 14,
  },
  textSecond: {
    color: COLORS.black,
    fontFamily: FONTS.YBILight,
    fontSize: 14,
  },
});
