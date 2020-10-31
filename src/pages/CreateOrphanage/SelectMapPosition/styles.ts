import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  buttonTouch: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12%',
    backgroundColor: 'rgba(21, 182, 214, 0.7)',
  },

  buttonTouchContext: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  touchImg: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },

  buttonTouchText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito_800ExtraBold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 34,
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  },
});

export default styles;