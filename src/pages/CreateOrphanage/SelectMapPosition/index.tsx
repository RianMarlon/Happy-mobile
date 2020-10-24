import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import mapMarkerImg from '../../../assets/images/map-marker.png';

import styles from './styles';

interface OrphanageMapRouteParams {
  myLocation: {
    latitude: number;
    longitude: number;
  }
}

function SelectMapPosition() {

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const { navigate } = useNavigation();

  const route = useRoute();
  const { myLocation } = route.params as OrphanageMapRouteParams

  function handleNextStep() {
    navigate('OrphanageData', { position });
  }

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  return (
    <View style={styles.container}>
      <MapView 
        region={{
          latitude: myLocation.latitude, 
          longitude: myLocation.longitude,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
          <Marker 
            icon={mapMarkerImg}
            coordinate={{ latitude: position.latitude, longitude: position.longitude }}
          />
        )}
      </MapView>

      <RectButton style={styles.nextButton} onPress={handleNextStep}>
        <Text style={styles.nextButtonText}>Próximo</Text>
      </RectButton>
    </View>
  );
}

export default SelectMapPosition;
