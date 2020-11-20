import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-root-toast';

import api from '../../services/api';
import { TOKEN_KEY } from '../../services/auth';

import AuthContext from '../../contexts/AuthContext';

import useForm from '../../hooks/useForm';

import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';
import Logo from '../../components/Logo';

import checkImg from '../../assets/images/check.png';

import styles from './styles';

function Login() {

  const { checkToken } = useContext(AuthContext)
  const { navigate } = useNavigation();

  const initialFields = {
    email: '',
    password: ''
  }
  
  const [rememberMe, setRememberMe] = useState(false);
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

  function navigateForgotPassword() {
    navigate('ForgotPassword');
  }

  function navigateWhoAreYou() {
    navigate('WhoAreYou');
  }

  function handleSubmitLogin() {
    validateFields();

    if (hasOneFieldEmpty()) {
      return;
    }

    const data = {
      email: form.email,
      password: form.password,
      remember_me: rememberMe
    }

    api.post('/signin', data)
      .then(async (response) => {
        const { token } = response.data;

        await AsyncStorage.setItem(TOKEN_KEY, token);
        await checkToken();
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
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Fazer login
            </Text>
            <TouchableOpacity onPress={navigateWhoAreYou}>
              <Text style={styles.createAccountButtonText}>
                Criar uma conta
              </Text>
            </TouchableOpacity>
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
            />
            <InputPassword 
              label="Senha"
              value={form.password}
              onChangeText={(value) => updateField('password', value)}
              labelError="Senha não informada"
              error={errors.password}
              autoCapitalize="none"
              style={{ marginBottom: 0 }}
            />

            <View style={styles.extraContainer}>
              <TouchableOpacity 
                style={styles.checkButton}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <View style={rememberMe
                  ? [styles.checkContainer, styles.checkContainerYes]
                  : [styles.checkContainer, styles.checkContainerNo]
                }>
                  {rememberMe && (
                    <Image source={checkImg} style={styles.checkImg} />
                  )}
                </View>

                <Text style={styles.checkButtonText}>
                  Lembrar-me
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={navigateForgotPassword}>
                <Text style={styles.forgotPasswordButtonText}>
                  Esqueci minha senha
                </Text>
              </TouchableOpacity>
            </View>

            {
              buttonSubmitDisabled ? (
                <TouchableOpacity
                  style={[
                    styles.loginButton, styles.loginButtonDisabled
                  ]}
                  disabled={buttonSubmitDisabled}
                >
                  <Text style={styles.loginButtonText}>
                    Entrar
                  </Text>
                </TouchableOpacity>
              ) : (
                <RectButton
                  onPress={handleSubmitLogin}
                  style={styles.loginButton}
                >
                  <Text style={styles.loginButtonText}>
                    Entrar
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

export default Login;
