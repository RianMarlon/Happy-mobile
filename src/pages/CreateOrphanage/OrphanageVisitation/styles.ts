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

  comment: {
    fontSize: 11,
    color: '#8FA7B3',
  },

  input: {
    marginBottom: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    height: 56,
    backgroundColor: '#FFF',
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: '#A1E9C5',
    textAlignVertical: 'top',
  },

  uploadedImageContainerBorder: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 8,
    padding: 1,
    height: 72,
    borderRadius: 20,
  },

  uploadedImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
    paddingRight: 20,
    width: '100%',
    borderRadius: 20,
  },

  uploadedImageInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadedImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },

  uploadedImageName: {
    marginLeft: 20,
    color: '#37C77F',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
  },

  imagesInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    height: 56,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
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
    marginTop: 32,
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
