import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.yellow,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: COLORS.black,
    marginVertical: 16,
  },
  drawerLabel: {
    fontSize: 26,
    fontFamily: FONTS.YBIBold,
    color: COLORS.black,
    marginLeft: 0,
    marginBottom: 10,
  },
});
