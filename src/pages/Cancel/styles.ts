import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 70,
    paddingHorizontal: 32,
    backgroundColor: '#FF669D',
  },

  cancelIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    width: 64,
    height: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  },
  
  title: {
    marginBottom: 18,
    color: '#FFFFFF',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 40,
    lineHeight: 45,
    textAlign: 'center',
  },

  description: {
    marginBottom: 24,
    color: '#FFFFFF',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonNo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10%',
    height: 56,
    width: 128,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#D6487B',
  },

  buttonYes: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 128,
    borderRadius: 20,
    backgroundColor: '#D6487B',
  },

  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
  },
});

export default styles;