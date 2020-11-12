import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

import useForm from '../../../hooks/useForm';

import Input from '../../../components/Input';

import styles from './styles';

interface OrphanageDataRouteParams {
  position: {
    latitude: number;
    longitude: number;
  }
}

export interface ImageProps {
  name: string;
  uri: string;
}

function OrphanageData() {

  const { navigate } = useNavigation();

  const initialFields = {
    name: '',
    about: '',
    whatsapp: '',
  }
  
  const [
    form, errors,
    updateField, validateFields,
    hasOneFieldEmpty,
  ] = useForm(initialFields);

  const [buttonNextDisabled, setButtonNextDisabled] = useState(true);

  const [images, setImages] = useState<ImageProps[]>([]);
  const [errorImages, setErrorImages] = useState(false);

  const [countImages, setCountImages] = useState(0);

  const route = useRoute();
  const params = route.params as OrphanageDataRouteParams;

  useEffect(() => {
    if (hasOneFieldEmpty() || images.length === 0) {
      if (images.length > 0) {
        setErrorImages(false);
      }
      
      setButtonNextDisabled(true);
    }

    else {
      setButtonNextDisabled(false);
      setErrorImages(false);
    }
  }, [form, images]);

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
  
  function handleNextStep() {
    validateFields();

    if (hasOneFieldEmpty() || images.length === 0) {
      if (images.length === 0) {
        setErrorImages(true);
      }

      return;
    }

    const { latitude, longitude } = params.position;

    navigate('OrphanageVisitation', {
      name: form.name,
      about: form.about,
      whatsapp: form.whatsapp,
      images,
      latitude,
      longitude
    });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Dados</Text>
        <View style={styles.paginationContainer}>
          <Text style={styles.pageEnabled}>
            01
          </Text>
          <Text style={styles.pageDisabled}>
            {' - '}
          </Text>
          <Text style={styles.pageDisabled}>
            02
          </Text>
        </View>
      </View>

      <Input 
        label="Nome"
        value={form.name}
        onChangeText={(value) => updateField('name', value)}
        labelError="Nome não informado"
        error={errors.name}
      />

      <Input 
        label="Sobre"
        value={form.about}
        onChangeText={(value) => updateField('about', value)}
        labelError="Informações sobre o orfanato não informadas"
        error={errors.about}
        comment="Máximo de 500 caracteres"
        multiline
        maxLength={500}
        style={{ height: 110 }}
      />

      <Input 
        label="Número do Whatsapp"
        value={form.whatsapp}
        onChangeText={(value) => addNumber('whatsapp', value)}
        labelError="Número do Whatsapp não informado"
        error={errors.whatsapp}
        placeholder="Ex: 5585992820129"
        keyboardType="numeric"
      />

      <Text style={!errorImages ? [styles.label] : [styles.label, styles.error]}>
        {!errorImages ? 'Fotos'
          : 'Fotos não fornecidas'
        }
      </Text>

      {images.map((image, index) => {
        return (
          <LinearGradient
            key={image.uri}
            style={styles.uploadedImageContainerBorder}
            colors={['#A1E9C5', '#FFC2D8']}
            start={[0.6, 0.6]}
            end={[1, 1]}
          >
            <LinearGradient
              style={styles.uploadedImageContainer}
              colors={['#EDFFF6', '#FCF0F4']}
              start={[0.6, 0.6]}
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
          </LinearGradient>
        );
      })}

      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      {buttonNextDisabled ? (
        <TouchableOpacity
          style={[
            styles.nextButton, styles.nextButtonDisabled
          ]}
          disabled={buttonNextDisabled}
        >
          <Text style={styles.nextButtonText}>
            Próximo
          </Text>
        </TouchableOpacity>
      ) : (
        <RectButton style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
      )}
    </ScrollView>
  );
}

export default OrphanageData;
