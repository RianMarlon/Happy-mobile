import React, { useState } from 'react';
import { ScrollView, View, Switch, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import useForm from '../../../hooks/useForm';

import styles from './styles';
import api from '../../../services/api';

interface OrphanageDataRouteParams {
  position: {
    latitude: number;
    longitude: number;
  }
}

function OrphanageData() {

  const { navigate } = useNavigation();

  const initialFields = {
    name: '',
    about: '',
    instructions: '',
    openingHours: '',
  }
  
  const [form, updateField] = useForm(initialFields)
  const [openOnWeekends, setOpenOnWeekends] = useState(false);

  const [images, setImages] = useState<string[]>([]);

  const route = useRoute();
  const params = route.params as OrphanageDataRouteParams;

  function handleCreateOrphanage() {
    const { latitude, longitude } = params.position;

    const data = new FormData();

    data.append('name', form.name);
    data.append('about', form.about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', form.instructions);
    data.append('opening_hours', form.openingHours);
    data.append('open_on_weekends', String(openOnWeekends));
    
    images.forEach((image, index) => {
      data.append('images', {
        name: `image-${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any);
    });

    api.post('/orphanages', data)
      .then(() => {
        alert('Cadastro realizado com sucesso!');
        navigate('OrphanagesMap');
      });
  }

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      alert('Precisamos ter acesso às suas fotos...');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImages([...images, image]);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Dados</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={form.name}
        onChangeText={(value) => updateField('name', value)}
      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={form.about}
        onChangeText={(value) => updateField('about', value)}
      />

      {/* <Text style={styles.label}>Whatsapp</Text>
      <TextInput
        style={styles.input}
      /> */}

      <Text style={styles.label}>Fotos</Text>

      <View style={styles.uploadedImagesContainer}>
        {images.map((image) => {
          return (
            <Image 
              key={image}
              style={styles.uploadedImage}
              source={{
                uri: image
              }}
            />
          );
        })}
      </View>

      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Text style={styles.title}>Visitação</Text>

      <Text style={styles.label}>Instruções</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={form.instructions}
        onChangeText={(value) => updateField('instructions', value)}
      />

      <Text style={styles.label}>Horario de visitas</Text>
      <TextInput
        style={styles.input}
        value={form.openingHours}
        onChangeText={(value) => updateField('openingHours', value)}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Atende final de semana?</Text>
        <Switch 
          thumbColor="#FFF" 
          trackColor={{ false: '#CCC', true: '#39CC83' }}
          value={openOnWeekends}
          onValueChange={setOpenOnWeekends}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={handleCreateOrphanage}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  );
}

export default OrphanageData;
