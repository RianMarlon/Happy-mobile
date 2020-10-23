import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 720,
  },
  
  imageOnboarding: {
    marginTop: 50,
    paddingBottom: 0,
  },

  titleWorldHappy: {
    marginTop: 20,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 48,
    lineHeight: 48,
    color: '#0089A5',
    textAlign: 'left',
  },

  descriptionWorldHappy: {
    marginTop: -20,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 20,
    lineHeight: 30,
    color: '#5C8599',
    textAlign: 'left',
    paddingBottom: 80,
  },

  titleKidsHappy: {
    marginBottom: 20,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 30,
    lineHeight: 36,
    color: '#0089A5',
    textAlign: 'right',
  },

  buttonNext: {
    marginRight: 30,
    marginBottom: 70,
    width: 56,
    borderRadius: 20,
    height: 56,
    backgroundColor: '#D1EDF2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  squareNoSelected: {
    width: 8,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#BECFD8',
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 70,
  },

  squareSelected: {
    width: 16,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#FFD152',
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 70,
  },
});

export default styles;
