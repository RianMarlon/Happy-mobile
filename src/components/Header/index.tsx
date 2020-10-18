import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface HeaderProps {
  title: string,
  showCancel?: boolean
}

function Header({ title, showCancel = true }: HeaderProps) {
  const { navigate, goBack } = useNavigation();

  function handleGoBackToAppHomePage() {
    navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBack}>
        <Feather name="arrow-left" size={24} color="#15B6D6" />
      </BorderlessButton>
      <Text style={styles.title}>
        {title}
      </Text>
      { showCancel ? (
        <BorderlessButton>
          <Feather 
            name="x" 
            size={24} 
            color="#FF669D" 
            onPress={handleGoBackToAppHomePage} 
          />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
}

export default Header;
