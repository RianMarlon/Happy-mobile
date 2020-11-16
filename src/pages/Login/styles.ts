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
    paddingVertical: '15%',
    paddingHorizontal: '10%',
  },

  mainContainer: {
    width: '100%',
    maxWidth: 400,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleText: {
    fontFamily: 'Nunito_700Bold',
    color: '#5C8599',
    fontSize: 24,
    lineHeight: 34,
  },

  createAccountButtonText: {
    color: '#00C7C7',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 13,
    lineHeight: 24,
  },
  
  formContainer: {
    marginTop: 24,
    maxWidth: 400,
    width: '100%',
  },

  extraContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  
  checkButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  checkButtonText: {
    marginLeft: 10,
    color: '#8FA7B2',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 13,
    lineHeight: 24,
  },

  checkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    width: 24,
    borderRadius: 8,
  },

  checkContainerYes: {
    backgroundColor: '#37C77F',
  },

  checkContainerNo: {
    backgroundColor: '#F5F8FA',
    borderWidth: 1,
    borderColor: '#D3E2E5',
  },

  checkImg: {
    height: 9,
    width: 13,
  },

  forgotPasswordButtonText: {
    color: '#8FA7B2',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 13,
    lineHeight: 24,
    textDecorationLine: 'underline',
  },

  loginButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    height: 58,
    backgroundColor: '#37C77F',
    borderRadius: 18,
  },

  loginButtonDisabled: {
    backgroundColor: '#37C77F44',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
  },
});

export default styles;