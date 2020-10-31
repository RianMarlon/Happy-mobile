import React, { useEffect, useState } from 'react';
import { View, Text, Image, Modal, TouchableHighlight, AsyncStorage } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker } from 'react-native-maps';

import mapMarkerImg from '../../../assets/images/map-marker.png';
import touchImg from '../../../assets/images/touch.png';

import styles from './styles';

interface OrphanageMapRouteParams {
  myLocation: {
    latitude: number;
    longitude: number;
  }
}

function SelectMapPosition() {

  const [position, setPosition] = useState({ latitude: 1000, longitude: 1000 });
  const [touchInstructionsVisible, setTouchInstructionsVisible] = useState(false);

  const { navigate } = useNavigation();

  const route = useRoute();
  const { myLocation } = route.params as OrphanageMapRouteParams;

  useEffect(() => {
    (async () => {
      const response = await AsyncStorage.getItem('@happy:instructionSelectMapPosition');  

      if (response === null) {
        setTouchInstructionsVisible(true);
      }

      else {
        setTouchInstructionsVisible(false);
      }
    })();
  }, []);

  async function handleTouchInstuctions() {
    await AsyncStorage.setItem('@happy:instructionSelectMapPosition', 'true');
    setTouchInstructionsVisible(false);
  }

  function handleNextStep() {
    navigate('OrphanageData', { position });
  }

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  return (
    <View style={styles.container}>
      <Modal visible={touchInstructionsVisible} 
        transparent={true}
        statusBarTranslucent={true} 
      >
        <TouchableHighlight 
          style={styles.buttonTouch} 
          onPress={handleTouchInstuctions}
        >
          <View style={styles.buttonTouchContext}>
            <Image source={touchImg} style={styles.touchImg} />
            <Text style={styles.buttonTouchText}>
              Toque no mapa para selecionar a localização do orfanato
            </Text>
          </View>
        </TouchableHighlight>
      </Modal>
      <MapView 
        initialRegion={{
          latitude: myLocation.latitude, 
          longitude: myLocation.longitude,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 1000 && (
          <Marker 
            icon={mapMarkerImg}
            coordinate={{ latitude: position.latitude, longitude: position.longitude }}
          />
        )}
      </MapView>

      {
        position.latitude !== 1000 && (    
          <RectButton style={styles.nextButton} onPress={handleNextStep}>
            <Text style={styles.nextButtonText}>Próximo</Text>
          </RectButton>
        )
      }
    </View>
  );
}

export default SelectMapPosition;
