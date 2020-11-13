import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  labelText: {
    color: '#8FA7B3',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
  },

  comment: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 12,
    lineHeight: 20,
    color: '#8FA7B2',
  },

  inputContainer: {
    position: 'relative',
    height: 56,
    marginBottom: 16,
  },

  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#D3E2E5',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    paddingRight: 60,
    textAlignVertical: 'top',
  },

  noEmpty: {
    borderColor: '#A1E9C5',
  },

  inputError: {
    borderColor: '#FF669D',
  },

  error: {
    color: '#FF669D',
  },

  buttonShowPasswordContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    height: 56,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonShowPassword: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});

export default styles;
