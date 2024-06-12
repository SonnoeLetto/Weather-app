import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.yellow,
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontFamily: FONTS.YBIBold,
    color: COLORS.black,
    textAlign: 'center',
    marginHorizontal: 24,
  },
  inputStyle: {
    height: 52,
    borderWidth: 3,
    marginHorizontal: 24,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginTop: 26,
    fontSize: 16,
    fontFamily: FONTS.YBIMedium,
    color: COLORS.black,
  },
  errorText: {
    fontSize: 16,
    fontFamily: FONTS.YBIBold,
    color: COLORS.red_33,
    textAlign: 'left',
    marginBottom: 26,
    marginHorizontal: 28,
  },
});
