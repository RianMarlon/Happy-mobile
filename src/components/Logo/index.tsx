import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/images/logo.png';

import styles from './styles';

function Logo() {
  return (
    <LinearGradient 
      style={styles.container}
      colors={['#2AB5D1', '#00C7C7']}
      start={[1, 1]}
      end={[0, 0]}
    >
      <Image source={logoImg} style={styles.logoImg} />
    </LinearGradient>
  );
}

export default Logo;
