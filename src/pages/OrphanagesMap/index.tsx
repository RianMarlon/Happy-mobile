import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import * as Location from 'expo-location';

import api from '../../services/api';

import mapMarkerImg from '../../assets/images/map-marker.png';

import styles from './styles';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

interface MyLocation {
  latitude: number;
  longitude: number;
}

function OrphanagesMap() {

  const [myLocation, setMyLocation] = useState<MyLocation>({
    latitude: -5.1069647,
    longitude: -38.3761372
  });

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  const { navigate } = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      api.get('/orphanages')
        .then((response) => {
          setOrphanages(response.data);  
        });
    }, [])
  );

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({
        enabledHighAccuracy: true
      } as any);
      
      setMyLocation({
        latitude: coords.latitude,
        longitude: coords.longitude
      });
    })();
  }, [])

  function handleNavigateToOrphanageDetails(id: number) {
    navigate('OrphanageDetails', { id });
  }

  function handleNavigateToCreateOrphanage() {
    navigate('SelectMapPosition', { myLocation });
  }

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: myLocation.latitude,
          longitude: myLocation.longitude,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {orphanages.map((orphanage) => {
          return (
            <Marker 
              key={orphanage.id}
              icon={mapMarkerImg}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
              calloutAnchor={{
                x: 2.8,
                y: 0.8,
              }}
            >
              <Callout 
                tooltip={true} 
                onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}
              >
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>
                    {orphanage.name}
                  </Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <View style={styles.footer}>
          <Text style={styles.footerText}>
            {orphanages.length > 1 
              ? `${orphanages.length} orfanatos encontrados`
              : `${orphanages.length} orfanato encontrado`
            }
          </Text>

          <RectButton 
            style={styles.createOrphanageButton}
            onPress={handleNavigateToCreateOrphanage}
          >
            <Feather name="plus" size={20} color="#FFF" />
          </RectButton>
      </View>
    </View>
  );
}

export default OrphanagesMap;
