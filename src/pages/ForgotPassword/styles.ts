import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
    paddingBottom: '15%',
    paddingHorizontal: '10%',
  },

  mainContainer: {
    width: '100%',
    maxWidth: 400,
  },

  backButtonContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },

  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    backgroundColor: '#EBF2F5',
    borderRadius: 16,
  },

  titleContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 24,
    paddingRight: 10,
  },

  titleText: {
    color: '#5C8599',
    fontFamily: 'Nunito_700Bold',
    fontSize: 24,
    lineHeight: 34,
  },

  descriptionText: {
    marginTop: 10,
    width: '90%',
    color: '#5C8599',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
    lineHeight: 24,
  },
  
  formContainer: {
    marginTop: 24,
    maxWidth: 400,
    width: '100%',
  },

  forgotPasswordButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    height: 58,
    backgroundColor: '#37C77F',
    borderRadius: 18,
  },

  forgotPasswordButtonDisabled: {
    backgroundColor: '#37C77F44',
  },

  forgotPasswordButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
  },
});

export default styles;
