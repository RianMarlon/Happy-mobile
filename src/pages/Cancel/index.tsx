import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface CancelRouteParams {
  title: string;
  description: string;
  routeButtonCancel: string;
}

function Cancel() {

  const { navigate, goBack } = useNavigation();

  const route = useRoute();
  const { title, description, routeButtonCancel } = route.params as CancelRouteParams;

  return (
    <View style={styles.container}>
      <View style={styles.cancelIconContainer}>
        <Feather name="x" size={31} color="#FF669D" />
      </View>
      <Text style={styles.title}>
        { title }
      </Text>

      <Text style={styles.description}>
        { description }
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonNo} onPress={goBack}>
          <Text style={styles.buttonText}>
            Não
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonYes} onPress={() => navigate(routeButtonCancel)}>
          <Text style={styles.buttonText}>
            Sim
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Cancel;
