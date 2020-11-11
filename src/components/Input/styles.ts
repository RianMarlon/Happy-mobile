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

  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#D3E2E5',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
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
});

export default styles;
