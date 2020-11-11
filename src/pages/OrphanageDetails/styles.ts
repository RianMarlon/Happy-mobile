import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    height: 240,
  },

  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },

  detailsContainer: {
    padding: 24,
  },

  title: {
    color: '#4D6F80',
    fontSize: 30,
    fontFamily: 'Nunito_700Bold',
  },

  description: {
    marginTop: 16,
    color: '#5C8599',
    fontFamily: 'Nunito_600SemiBold',
    lineHeight: 24,
  },

  mapContainer: {
    marginTop: 40,
    overflow: 'hidden',
    backgroundColor: '#E6F7FB',
    borderRadius: 20,
    borderWidth: 1.2,
    borderColor: '#B3DAE2',
  },

  mapStyle: {
    width: '100%',
    height: 150,
  },

  routesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  routesText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089A5',
  },

  separator: {
    marginVertical: 40,
    height: 0.8,
    width: '100%',
    backgroundColor: '#D3E2E6',
  },

  scheduleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },

  scheduleItem: {
    padding: 20,
    width: '48%',
  },

  scheduleItemBlue: {
    backgroundColor: '#E6F7FB',
    borderWidth: 1,
    borderColor: '#B3DAE2',
    borderRadius: 20,
  },

  scheduleItemGreen: {
    backgroundColor: '#EDFFF6',
    borderWidth: 1,
    borderColor: '#A1E9C5',
    borderRadius: 20,
  },

  scheduleItemRed: {
    backgroundColor: '#FEF6F9',
    borderWidth: 1,
    borderColor: '#FFBCD4',
    borderRadius: 20,
  },

  scheduleText: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },

  scheduleTextBlue: {
    color: '#5C8599',
  },

  scheduleTextGreen: {
    color: '#37C77F',
  },

  scheduleTextRed: {
    color: '#FF669D',
  },

  contactButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    height: 56,
    backgroundColor: '#3CDC8C',
    borderRadius: 20,
  },

  contactButtonText: {
    color: '#FFF',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;
