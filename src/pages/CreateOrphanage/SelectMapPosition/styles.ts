import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  buttonTouch: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12%',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(21, 182, 214, 0.7)',
  },

  buttonTouchContext: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  touchImg: {
    marginBottom: 10,
    width: 120,
    height: 120,
  },

  buttonTouchText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 34,
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
  },

  nextButtonText: {
    color: '#FFF',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  },
});

export default styles;