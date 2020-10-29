import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39CC83',
  },

  ballonImg: {
    marginBottom: 32,
    width: 250,
    height: 306,
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

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 120,
    borderRadius: 20,
    backgroundColor: '#19C06D',
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