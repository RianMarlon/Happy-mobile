import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-root-toast';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import useForm from '../../hooks/useForm';

import Input from '../../components/Input';
import Logo from '../../components/Logo';

import backImg from '../../assets/images/back.png';

import styles from './styles';

function ForgotPassword() {

  const { navigate, goBack } = useNavigation();

  const initialFields = {
    email: '',
  }
  
  const [
    form, errors,
    updateField, validateFields,
    hasOneFieldEmpty,
  ] = useForm(initialFields);
  
  const [buttonSubmitDisabled, setButtonSubmitDisabled] = useState(true);

  const regexValidateEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/;

  const [toastMessage, setToastMessage] = useState('');
  const [toastVisibility, setToastVisibility] = useState(false);

  useEffect(() => {
    const hasEmailValid = regexValidateEmail.test(form.email);

    if (!hasEmailValid || hasOneFieldEmpty()) {
      setButtonSubmitDisabled(true);
    }

    else {
      setButtonSubmitDisabled(false);
    }
  }, [form]);

  function handleSubmitForgotPassword() {
    validateFields();

    if (hasOneFieldEmpty()) {
      return;
    }

    const data = {
      email: form.email,
    }

    api.post('/forgot-password', data)
      .then(() => {
        navigate('Success', {
          title: 'Redefinição enviada!',
          description: 'O e-mail com o link da página para a redefinição da senha foi enviada para o seu e-mail.',
          textButton: 'Voltar ao login',
          routeButton: 'Login',
        });
      })
      .catch(({ response }) => {
        const data = response.data;
        const messageError = data.messagesError[0] ? data.messagesError[0]
          : 'Ocorreu um erro inesperado!';

        setToastMessage(messageError);

        setToastVisibility(true)
        setTimeout(() => setToastVisibility(false), 5000); 
      });
  }

  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.main}>
        <View style={styles.mainContainer}>
          <View style={styles.backButtonContainer}>
            <RectButton 
              style={styles.backButton}
              onPress={goBack}
            >
              <Image source={backImg} />
            </RectButton>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Esqueci a senha
            </Text>
            <Text style={styles.descriptionText}>
              Sua redefinição de senha será enviada
              para o e-mail informado.
            </Text>
          </View>
          <View style={styles.formContainer}>
            <Input 
              label="E-mail"
              value={form.email}
              onChangeText={(value) => updateField('email', value)}
              labelError="E-mail não informado"
              error={errors.email}
              keyboardType="email-address"
              autoCapitalize="none"
              style={{ marginBottom: 0 }}
            />

            {
              buttonSubmitDisabled ? (
                <TouchableOpacity
                  style={[
                    styles.forgotPasswordButton, styles.forgotPasswordButtonDisabled
                  ]}
                  disabled={buttonSubmitDisabled}
                >
                  <Text style={styles.forgotPasswordButtonText}>
                    Entrar
                  </Text>
                </TouchableOpacity>
              ) : (
                <RectButton
                  onPress={handleSubmitForgotPassword}
                  style={styles.forgotPasswordButton}
                >
                  <Text style={styles.forgotPasswordButtonText}>
                    Enviar
                  </Text>
                </RectButton>
              )
            }
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ForgotPassword;
