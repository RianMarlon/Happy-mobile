import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import mapMarker from '../../assets/images/map-marker.png';

import styles from './styles';

function OrphanagesMap() {
  const { navigate } = useNavigation();

  function handleNavigateToOrphanageDetails() {
    navigate('OrphanageDetails');
  }

  function handleNavigateToCreateOrphanage() {
    navigate('SelectMapPosition');
  }

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -5.1069647,
          longitude: -38.3761372,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker 
          icon={mapMarker}
          coordinate={{
            latitude: -5.1069647,
            longitude: -38.3761372,
          }}
          calloutAnchor={{
            x: 2.8,
            y: 0.8,
          }}
        >
          <Callout 
            tooltip={true} 
            onPress={handleNavigateToOrphanageDetails}
          >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>
                Lar das meninas
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
          <Text style={styles.footerText}>
            2 orfanatos encontrados
          </Text>

          <TouchableOpacity 
            style={styles.createOrphanageButton}
            onPress={handleNavigateToCreateOrphanage}
          >
            <Feather name="plus" size={20} color="#FFF" />
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default OrphanagesMap;
