import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Onboarding, { DoneButtonProps, DotProps, NextButtonProps } from 'react-native-onboarding-swiper';

import kidsHappyImg from '../../assets/images/kids-happy.png';
import worldHappyImg from '../../assets/images/world-happy.png';

import styles from './styles';

const Square = ({ isLight, selected }: DotProps) => {
  let stylesSquare;

  if (selected) {
    stylesSquare = styles.squareSelected;
  }

  else {
    stylesSquare = styles.squareNoSelected;
  }

  return (
    <View
      style={stylesSquare}
    />
  );
};

const NextButton = ({ isLight, ...props }: NextButtonProps) => {
  return (
    <RectButton style={styles.buttonNext} { ...props }>
      <Feather name="arrow-right" size={25} color="#15B6D6" />
    </RectButton>
  );
}

const DoneButton = ({ isLight, ...props }: DoneButtonProps) => {
  return (
    <RectButton style={styles.buttonNext} { ...props }>
      <Feather name="arrow-right" size={25} color="#15B6D6" />
    </RectButton>
  );
}

function OnboardingPage() {

  const { navigate } = useNavigation();

  return (
    <ScrollView>
        <Onboarding
          containerStyles={styles.container}
          imageContainerStyles={styles.imageOnboarding}
          showSkip={false}
          NextButtonComponent={NextButton}
          DoneButtonComponent={DoneButton}
          DotComponent={Square}
          onDone={() => navigate("OrphanagesMap")}
          bottomBarColor="#CEDEE5"
          controlStatusBar={false}
          pages={[
            {
              backgroundColor: "#CEDEE5",
              image: (
                <Image source={worldHappyImg} width={257} height={279} />
              ),
              title: (
                <Text style={styles.titleWorldHappy}>
                  Leve felicidade para o mundo
                </Text>
              ),
              subtitle: (
                <Text style={styles.descriptionWorldHappy}>
                  Visite orfanatos e mude o dia de muitas crianças.
                </Text>
              )
            },
            {
              backgroundColor: "#CEDEE5",
              image: (
                <Image source={kidsHappyImg} width={295} height={427} />
              ),
              title: (
                <Text style={styles.titleKidsHappy}>
                  Escolha um orfanato no mapa e faça uma visita
                </Text>
              ),
              subtitle: ""
            }
          ]}
        />
    </ScrollView>
  );
}

export default OnboardingPage;
