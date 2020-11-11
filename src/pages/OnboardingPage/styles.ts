import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
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
    paddingBottom: 80,
    color: '#5C8599',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'left',
  },

  titleKidsHappy: {
    marginBottom: 20,
    color: '#0089A5',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 30,
    lineHeight: 36,
    textAlign: 'right',
  },

  buttonNext: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
    marginBottom: 70,
    width: 56,
    height: 56,
    borderRadius: 20,
    backgroundColor: '#D1EDF2',
  },

  squareNoSelected: {
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 70,
    width: 8,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#BECFD8',
  },

  squareSelected: {
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 70,
    width: 16,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#FFD152',
  },
});

export default styles;
