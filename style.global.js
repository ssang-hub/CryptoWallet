import { StyleSheet } from 'react-native';
const globalStyles = StyleSheet.create({
  btn_outline_primary: {
    backgroundColor: '#fff',
    borderColor: '#0d6efd',
    borderWidth: 2,
    borderRadius: 50,
    padding: 15,
  },
  btn_primary: {
    backgroundColor: '#0d6efd',
    borderColor: '#0d6efd',
    borderRadius: 50,
    padding: 15,
  },
  color_white: {
    color: '#fff',
  },
  color_primary: {
    color: '#0d6efd',
  },
  positionRelative: {
    position: 'relative',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  h1: {},
  h2: {},
  h3: { fontSize: 25, fontWeight: 'bold' },
  h4: { fontSize: 20, fontWeight: 'bold' },
  h5: { fontSize: 15, fontWeight: 'bold' },
  h6: {},
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#221F3A',
    alignItems: 'center',
  },
  justifyContentSpaceAround: {
    justifyContent: 'space-around',
  },
  buttonLinear: {
    paddingHorizontal: 50,
    borderRadius: 50,
    paddingVertical: 10,
  },
  shadowBox: {
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 50,
  },
  centerInView: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
export default globalStyles;
