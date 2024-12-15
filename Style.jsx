import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  title: {
    color: '#F3A8CE',
    fontSize: (width / 100) * 6.8,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    letterSpacing: (width / 100) * 0.4,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  summery: {
    fontSize: (width / 100) * 3.5,
    fontWeight: '400',
    fontFamily: 'san-sarif',
    width: (width / 100) * 80,
    alignSelf: 'center',
    lineHeight: (width / 100) * 6,
    letterSpacing: (width / 100) * 0.2,
    color: '#000000',
    textAlign: 'center',
  },
  button_Container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: (height / 100) * 1.5,
  },
  insideView: {
    height: (height / 100) * 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: (height / 100) * 15,
  },
  Display: {
    justifyContent: 'space-between',
    height: height,
    backgroundColor: 'white',
  },
});

export const Styles = () => {
  return {
    styles,
    APP_fontFamily: 'Roboto, sans-serif',
    TextColor: '#F3A8CE',
    TextColor2: '#d6175e',
    iconsize: (width / 100) * 4.5,
    width,
    height,
  };
};
