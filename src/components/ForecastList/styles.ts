import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS, FONTS } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    maxHeight: DIMENSIONS.height - 180,
  },
  list: {
    marginVertical: 16,
  },
  foreCastContainer: {
    paddingHorizontal: 8,
    borderWidth: 2,
    marginVertical: 12,
    marginHorizontal: 12,
    borderColor: COLORS.black,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.yellow,
    width: DIMENSIONS.width - 24,
    height: 100,
  },
  foreCastTemp: {
    fontSize: 14,
    fontFamily: FONTS.YBIBold,
    color: COLORS.black,
  },
  foreCastDate: {
    fontSize: 14,
    fontFamily: FONTS.YBIBold,
    color: COLORS.black,
    textAlign: 'center',
  },
  forecastIconStyle: {
    height: 30,
    width: 30,
    tintColor: COLORS.black,
  },
});
