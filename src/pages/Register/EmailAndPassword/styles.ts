import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '12%',
    paddingBottom: '6%',
    paddingHorizontal: '10%',
  },

  mainContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 400,
    width: '100%',
  },

  buttonBackContainer: {
    width: '100%',
    marginBottom: 60,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    backgroundColor: '#EBF2F5',
    borderRadius: 16,
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

  titleContainer: {
    marginBottom: 20,
    paddingRight: 50,
  },

  titleText: {
    marginBottom: 10,
    color: '#5C8599',
    fontFamily: 'Nunito_700Bold',
    fontSize: 32,
    lineHeight: 42,
  },

  descriptionText: {
    marginRight: '10%',
    color: '#5C8599',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
    lineHeight: 24,
  },

  descriptionPageContainer: {
    width: '100%',
    marginTop: 50,
    marginBottom: 25,
    paddingRight: 10,
  },

  descriptionPageText: {
    color: '#5C8599',
    fontFamily: 'Nunito_700Bold',
    fontSize: 24,
    lineHeight: 34,
    textAlign: 'left',
  },

  formContainer: {
    marginBottom: 30,
    maxWidth: 400,
    width: '100%',
  },

  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    height: 56,
    backgroundColor: '#15C3D6',
    borderRadius: 20,
  },

  registerButtonDisabled: {
    backgroundColor: '#15C3D644',
  },

  registerButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  },
});

export default styles;
