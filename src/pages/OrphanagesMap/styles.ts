import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: 160,
    height: 46,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 16,
  },

  calloutText: {
    color: '#0089A5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    paddingLeft: 24,
    height: 56,
    backgroundColor: '#FFF',
    borderRadius: 20,
    elevation: 3,
  },

  footerText: {
    color: '#8FA7B3',
    fontFamily: 'Nunito_700Bold',
  },

  createOrphanageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    backgroundColor: '#15C3D6',
    borderRadius: 20,
  },
});

export default styles;
