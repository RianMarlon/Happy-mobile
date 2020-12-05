import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { RectButton, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../../services/api';
import useForm from '../../../hooks/useForm';

import Input from '../../../components/Input';

import styles from './styles';
import Toast from 'react-native-root-toast';

interface ImageProps {
  name: string;
  uri: string;
}

interface OrphanageVisitationRouteParams {
  name: string;
  about: string;
  whatsapp: string;
  images: ImageProps[];
  latitude: number;
  longitude: number;
}

function OrphanageVisitation() {

  const { navigate } = useNavigation();

  const initialFields = {
    openFrom: '',
    openUntil: '',
    instructions: '',
  }
  
  const [
    form, errors,
    updateField, validateFields,
    hasOneFieldEmpty,
  ] = useForm(initialFields);

  const [buttonRegisterDisabled, setButtonRegisterDisabled] = useState(true);

  const [openOnWeekends, setOpenOnWeekends] = useState(false);

  const route = useRoute();
  const params = route.params as OrphanageVisitationRouteParams;

  const [toastMessage, setToastMessage] = useState('');
  const [toastVisibility, setToastVisibility] = useState(false);

  useEffect(() => {
    if (hasOneFieldEmpty()) {
      setButtonRegisterDisabled(true);
    }

    else {
      setButtonRegisterDisabled(false);
    }
  }, [form]);
  
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
  
  function handleCreateOrphanage() {
    validateFields();

    if (hasOneFieldEmpty()) {
      return;
    }
    
    const data = new FormData();

    data.append('name', params.name);
    data.append('about', params.about);
    data.append('whatsapp', params.whatsapp);
    data.append('latitude', String(params.latitude));
    data.append('longitude', String(params.longitude));
    data.append('instructions', form.instructions);
    data.append('open_from', form.openFrom);
    data.append('open_until', form.openUntil);
    data.append('open_on_weekends', String(openOnWeekends));
    
    params.images.forEach((image) => {
      data.append('images', {
        name: image.name,
        uri: image.uri,
        type: 'image/jpg',
      } as any);
    });

    api.post('/orphanages', data)
      .then(() => {
        navigate('Success', {
          title: 'Ebaaa!',
          description: 'O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)',
          textButton: 'Ok',
          routeButton: 'OrphanagesMap',
        });
      })
      .catch(({ response }) => {
        const data = response.data;
        const messageError = data.messagesError[0] ? data.messagesError[0]
          : 'Ocorreu um erro inesperado!';

        setToastMessage(messageError);

        setToastVisibility(true);
        setTimeout(() => setToastVisibility(false), 5000); 
      });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Toast
        visible={toastVisibility}
        textColor="#FFFFFF"
        backgroundColor={'#E74C3C'}
        opacity={1}
        position={50}
        shadow={false}
        animation={false}
        hideOnPress={true}
      >
        { toastMessage }
      </Toast>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Visitação</Text>
        <View style={styles.paginationContainer}>
          <Text style={styles.pageDisabled}>
            01
          </Text>
          <Text style={styles.pageDisabled}>
            {' - '}
          </Text>
          <Text style={styles.pageEnabled}>
            02
          </Text>
        </View>
      </View>


      <Input
        label="Instruções"
        value={form.instructions}
        onChangeText={(value) => updateField('instructions', value)}
        labelError="Instruções sobre a visita não informadas"
        error={errors.instructions}
        comment="Máximo de 500 caracteres"
        multiline
        maxLength={500}
        style={{ height: 110 }}
      />
      
      <View style={styles.openingHoursContainer}>

        <Input
          label="Das"
          value={form.openFrom}
          onChangeText={(value) => addValueInTime('openFrom', value)}
          labelError="Horário não informado"
          error={errors.openFrom}
          keyboardType="numeric"
          maxLength={5}
          style={{ width: 90 }}
        />

        <Input
          label="Até"
          value={form.openUntil}
          onChangeText={(value) => addValueInTime('openUntil', value)}
          labelError="Horário não informado"
          error={errors.openUntil}
          keyboardType="numeric"
          maxLength={5}
          style={{ width: 90 }}
        />
      </View>

      <Text style={styles.label}>Atende final de semana?</Text>

      <View style={styles.openOnWeekendsButtonsContainer}>
        <TouchableWithoutFeedback
          style={openOnWeekends
            ? [styles.openOnWeekendsButton, styles.openOnWeekendsButtonFirst, styles.openOnWeekendsButtonActive]
            : [styles.openOnWeekendsButton, styles.openOnWeekendsButtonFirst]
          }
          onPress={() => setOpenOnWeekends(true)}
        >
          <Text
            style={openOnWeekends
              ? [styles.openOnWeekendsButtonText, styles.openOnWeekendsButtonActiveText]
              : [styles.openOnWeekendsButtonText]
            }
          >
            Sim
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={!openOnWeekends
            ? [styles.openOnWeekendsButton, styles.openOnWeekendsButtonLast, styles.openOnWeekendsButtonActive]
            : [styles.openOnWeekendsButton, styles.openOnWeekendsButtonLast]
          }
          onPress={() => setOpenOnWeekends(false)}
        >
          <Text
            style={!openOnWeekends
              ? [styles.openOnWeekendsButtonText, styles.openOnWeekendsButtonActiveText]
              : [styles.openOnWeekendsButtonText]
            }
          >
            Não
          </Text>
        </TouchableWithoutFeedback>
      </View>

      {buttonRegisterDisabled ? (
        <TouchableOpacity
          style={[
            styles.registerButton, styles.registerButtonDisabled
          ]}
          disabled={buttonRegisterDisabled}
        >
          <Text style={styles.registerButtonText}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      ) : (
        <RectButton style={styles.registerButton} onPress={handleCreateOrphanage}>
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </RectButton>
      )}
    </ScrollView>
  );
}

export default OrphanageVisitation;
