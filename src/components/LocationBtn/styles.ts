import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/theme';

export const styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 16,
    fontFamily: FONTS.YBIBold,
    color: COLORS.black,
    marginLeft: 0,
  },
  addContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    width: '100%',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: COLORS.black,
    marginTop: 50,
  },
});
