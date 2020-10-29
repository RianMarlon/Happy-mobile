import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import ballonImg from '../../assets/images/ballon.png';

import styles from './styles';

interface SuccessRouteParams {
  title: string;
  description: string;
  textButton: string;
  routeButton: string;
}

function Success() {

  const { navigate } = useNavigation();

  const route = useRoute();
  const { title, description, textButton, routeButton } = route.params as SuccessRouteParams;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.ballonImg} source={ballonImg} />
        <Text style={styles.title}>
          { title }
        </Text>

        <Text style={styles.description}>
          { description }
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigate(routeButton)}>
            <Text style={styles.buttonText}>
              { textButton }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Success;
