import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { RectButton, TouchableOpacity  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import useForm from '../../../hooks/useForm';

import Input from '../../../components/Input';

import backImg from '../../../assets/images/back.png';

import styles from './styles';

function WhoAreYou() {

  const { navigate, goBack } = useNavigation();
  
  const initialFields = {
    firstName: '',
    lastName: '',
  }

  const [
    form, errors,
    updateField, validateFields,
    hasOneFieldEmpty
  ] = useForm(initialFields);

  const [buttonNextDisabled, setButtonNextDisabled] = useState(true);

  useEffect(() => {
    if (hasOneFieldEmpty()) {
      setButtonNextDisabled(true);
    }

    else {
      setButtonNextDisabled(false);
    }
  }, [form]);

  function handleNextStep() {
    validateFields();

    if (hasOneFieldEmpty()) {
      return;
    }

    navigate('EmailAndPassword', {
      firstName: form.firstName,
      lastName: form.lastName,
    });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.mainContainer}>
          <View style={styles.backButtonContainer}>
            <RectButton 
              style={styles.backButton}
              onPress={goBack}
            >
              <Image source={backImg} />
            </RectButton>
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

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Crie sua conta gratuita
            </Text>

            <Text style={styles.descriptionText}>
              Basta preencher esses dados e você estará conosco.
            </Text>
          </View>
          <View style={styles.descriptionPageContainer}>
            <Text style={styles.descriptionPageText}>
              01. Quem é você?
            </Text>
          </View>
          <View style={styles.formContainer}>
            <Input
              label="Nome"
              value={form.firstName}
              onChangeText={(newValue: any) => updateField('firstName', newValue)}
              labelError="Nome não informado"
              error={errors.firstName}
            />

            <Input
              label="Sobrenome"
              value={form.lastName}
              onChangeText={(newValue: any) => updateField('lastName', newValue)}
              labelError="Sobrenome não informado"
              error={errors.lastName}
              style={{ marginBottom: 0 }}
            />

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
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default WhoAreYou;
