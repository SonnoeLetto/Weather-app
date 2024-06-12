import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/theme';

export const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 2,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.yellow,
    borderRadius: 60,
    marginHorizontal: 12,
    marginVertical: 4,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.YBIMedium,
    color: COLORS.black,
  },
  cityText: {
    marginHorizontal: 12,
    fontSize: 26,
    fontFamily: FONTS.YBIBold,
    color: COLORS.black,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
