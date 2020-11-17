import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { RectButton, TouchableOpacity  } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import Toast from 'react-native-root-toast';

import api from '../../../services/api';
import useForm from '../../../hooks/useForm';

import Input from '../../../components/Input';

import backImg from '../../../assets/images/back.png';

import styles from './styles';
import InputPassword from '../../../components/InputPassword';

interface EmailAndPasswordRouteParams {
  firstName: string;
  lastName: string;
}

function EmailAndPassword() {

  const { navigate, goBack } = useNavigation();
  
  const initialFields = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  const [
    form, errors,
    updateField, validateFields,
    hasOneFieldEmpty, resetFields
  ] = useForm(initialFields);

  const route = useRoute();

  const { firstName, lastName } = route.params as EmailAndPasswordRouteParams;

  const [labelTextError, setLabelTextError] = useState('Senha não informada');
  const [differentPasswords, setDifferentPasswords] = useState(false);

  const [buttonRegisterDisabled, setButtonRegisterDisabled] = useState(true);

  const regexValidateEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/;

  const [toastMessage, setToastMessage] = useState('');
  const [toastVisibility, setToastVisibility] = useState(false);

  useEffect(() => {
    const hasEmailValid = regexValidateEmail.test(form.email);

    if (!hasEmailValid || hasOneFieldEmpty()) {
      setButtonRegisterDisabled(true);
    }

    else {
      setButtonRegisterDisabled(false);
    }
  }, [form]);

  useEffect(() => {
    setDifferentPasswords(false);
  }, [form.confirmPassword]);

  function handleSubmitRegister() {

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: form.email,
      password: form.password,
      confirm_password: form.confirmPassword,
    }

    api.post('/signup', data)
      .then(() => {
        resetFields();

        navigate('Success', {
          title: "Cadastro concluído!",
          description: "Agora você precisa acessar seu e-mail e confirmá-lo através de um e-mail que enviamos.",
          textButton: "Ok",
          routeButton: "Login"
        });
      })
      .catch(({ response }) => {
        const data = response.data;

        console.log(data.messagesError)
        const messageError = data.messagesError[0] ? data.messagesError[0]
          : 'Ocorreu um erro inesperado!';

        setToastMessage(messageError);

        setToastVisibility(true);
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
      <View style={styles.main}>
        <View style={styles.mainContainer}>
          <View style={styles.buttonBackContainer}>
            <RectButton 
              style={styles.backButton}
              onPress={goBack}
            >
              <Image source={backImg} />
            </RectButton>
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
              02. E-mail e senha
            </Text>
          </View>
          <View style={styles.formContainer}>
            <Input
              label="E-mail"
              value={form.email}
              onChangeText={(newValue: any) => updateField('email', newValue)}
              labelError="E-mail não informado"
              error={errors.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <InputPassword
              label="Senha"
              value={form.password}
              onChangeText={(newValue: any) => updateField('password', newValue)}
              labelError="Senha não informada"
              error={errors.password}
              autoCapitalize="none"
            />

            <InputPassword
              label="Confirmar senha"
              value={form.confirmPassword}
              onChangeText={(newValue) => updateField('confirmPassword', newValue)}
              labelError={labelTextError}
              error={errors.confirmPassword || differentPasswords}
              autoCapitalize="none"
              style={{ marginBottom: 0 }}
            />

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
              <RectButton style={styles.registerButton} onPress={handleSubmitRegister}>
                <Text style={styles.registerButtonText}>Cadastrar</Text>
              </RectButton>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default EmailAndPassword;
