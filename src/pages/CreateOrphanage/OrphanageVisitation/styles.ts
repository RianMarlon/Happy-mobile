import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6',
  },

  title: {
    color: '#5C8599',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
  },
  
  paginationContainer: {
    flexDirection: 'row',
  },

  pageEnabled: {
    color: '#8FA7B3',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 12,
    lineHeight: 22,
    textAlign: 'right',
  },

  pageDisabled: {
    color: '#8FA7B3',
    fontFamily: 'Nunito_400Regular',
    fontSize: 12,
    lineHeight: 22,
    textAlign: 'right',
  },

  label: {
    marginBottom: 8,
    color: '#8FA7B3',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
  },
  
  openOnWeekendsButtonsContainer: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },

  openOnWeekendsButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: (Dimensions.get('window').width / 2) - 24,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDE3F0',
  },

  openOnWeekendsButtonActive: {
    backgroundColor: '#EDFFF6',
    borderColor: '#A1E9C5',
  },

  openOnWeekendsButtonFirst: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  openOnWeekendsButtonLast: {
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },

  openOnWeekendsButtonText: {
    color: '#5C8599',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
    lineHeight: 20,
  },

  openOnWeekendsButtonActiveText: {
    color: '#39CC83',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
    lineHeight: 20,
  },

  registerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 42,
    height: 56,
    backgroundColor: '#3CDC8C',
    borderRadius: 20,
  },

  registerButtonDisabled: {
    backgroundColor: '#3CDC8C44',
  },

  registerButtonText: {
    color: '#FFF',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  },
});

export default styles;
