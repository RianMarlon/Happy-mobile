import { StyleSheet } from 'react-native';

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
    color: '#8FA7B3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
    fontSize: 14,
  },

  error: {
    color: '#FF669D',
  },

  comment: {
    color: '#8FA7B3',
    fontSize: 11,
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

  nextButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    height: 56,
    backgroundColor: '#15C3D6',
    borderRadius: 20,
  },

  nextButtonDisabled: {
    backgroundColor: '#15C3D644',
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  },
});

export default styles;
