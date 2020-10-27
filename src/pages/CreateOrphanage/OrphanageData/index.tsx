import React, { useState } from 'react';
import { ScrollView, View, Switch, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

import api from '../../../services/api';
import useForm from '../../../hooks/useForm';

import Input from '../../../components/Input';

import styles from './styles';

interface OrphanageDataRouteParams {
  position: {
    latitude: number;
    longitude: number;
  }
}

interface ImageProps {
  name: string;
  uri: string;
}

function OrphanageData() {

  const { navigate } = useNavigation();

  const initialFields = {
    name: '',
    about: '',
    whatsapp: '',
    openFrom: '',
    openUntil: '',
    instructions: '',
  }
  
  const [form, updateField] = useForm(initialFields);
  const [openOnWeekends, setOpenOnWeekends] = useState(false);
  const [countImages, setCountImages] = useState(0);

  const [images, setImages] = useState<ImageProps[]>([]);

  const route = useRoute();
  const params = route.params as OrphanageDataRouteParams;
  
  function addValueInTime(field: string, newValue: string) {
    newValue = newValue.trim();
    
    if (!newValue.includes(':')) {
      if (newValue.length === 2) {
        newValue = newValue + ':';
      }
      
      else if (newValue.length === 5) {
        newValue = newValue.slice(0, 2) + ':' + newValue.slice(3, 5);
      }
    }
    
    else {
      if (newValue.length === 5) {
        const array = newValue.split(':').map((value) => parseInt(value));
        
        if (isNaN(array[0]) || isNaN(array[1])) {
          newValue = '00:00';
        }
        
        else if ((array[0] > 23 || array[0] < 0)
        || (array[1] > 59 || array[1] < 0)) {
          newValue = '00:00';
        }
      }
    }
    
    updateField(field, newValue);
  }
  
  function addNumber(field: string, newValue: string) {
    const regex = /^[0-9]+$/;
    
    if (regex.test(newValue) || newValue.trim() == '') {
      updateField(field, newValue.trim());
    }
  }
  
  function handleRemoveImage(index: number) {
    const newImages: ImageProps[] = [];
    
    images.forEach((image, indexImage) => {
      if (index !== indexImage) {
        newImages.push(image);
      }
    });
    
    setImages(newImages);
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

    const numberImage = countImages + 1 > 9 ? countImages + 1 : `0${countImages + 1}`;
    
    const image = {
      uri: result.uri,
      name: `imagem-${numberImage}.jpg`,
    };

    setImages([...images, image]);
    setCountImages(countImages + 1);
  }
  
  function handleCreateOrphanage() {
    const { latitude, longitude } = params.position;

    const data = new FormData();

    data.append('name', form.name);
    data.append('about', form.about);
    data.append('whatsapp', form.whatsapp);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', form.instructions);
    data.append('open_from', form.openFrom);
    data.append('open_until', form.openUntil);
    data.append('open_on_weekends', String(openOnWeekends));
    
    images.forEach((image) => {
      data.append('images', {
        name: image.name,
        uri: image.uri,
        type: 'image/jpg',
      } as any);
    });

    api.post('/orphanages', data)
      .then(() => {
        alert('Cadastro realizado com sucesso!');
        navigate('OrphanagesMap');
      });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Dados</Text>

      <Input 
        label="Nome"
        value={form.name}
        onChangeText={(value) => updateField('name', value)}
      />

      <Input 
        label="Sobre"
        comment="Máximo de 500 caracteres"
        value={form.about}
        onChangeText={(value) => updateField('about', value)}
        multiline
        maxLength={500}
        style={{ height: 110 }}
      />

      <Input 
        label="Número de Whatsapp"
        placeholder="Ex: 5585992820129"
        value={form.whatsapp}
        onChangeText={(value) => addNumber('whatsapp', value)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Fotos</Text>

      {images.map((image, index) => {
        return (
          <LinearGradient 
            key={image.uri} 
            style={styles.uploadedImageContainer}
            colors={['#EDFFF6', '#FCF0F4']}
            start={[0.7, 0]}
            end={[1, 1]}
          >
            <View style={styles.uploadedImageInfoContainer}>
              <Image
                style={styles.uploadedImage}
                source={{
                  uri: image.uri
                }}
              />
              <Text style={styles.uploadedImageName}>{image.name}</Text>
            </View>
            <BorderlessButton onPress={() => handleRemoveImage(index)}>
              <Feather name="x" size={24} color="#FF669D" />
            </BorderlessButton>
          </LinearGradient>
        );
      })}

      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Text style={styles.title}>Visitas</Text>

      <Input 
        label="Horário de abertura"
        value={form.openFrom}
        onChangeText={(value) => addValueInTime('openFrom', value)}
        keyboardType="numeric"
        maxLength={5}
      />

      <Input 
        label="Horário de fechamento"
        value={form.openUntil}
        onChangeText={(value) => addValueInTime('openUntil', value)}
        keyboardType="numeric"
        maxLength={5}
      />

      <Input 
        label="Instruções"
        value={form.instructions}
        onChangeText={(value) => updateField('instructions', value)}
        multiline
        style={{ height: 110 }}
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
