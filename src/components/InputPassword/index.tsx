import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TextStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { InputProps } from '../Input';

import eyeImg from '../../assets/images/eye.png';
import eyeOffImg from '../../assets/images/eye-off.png';

import styles from './styles';

interface InputPasswordProps extends InputProps {}

function InputPassword({
    label, labelError, error, ...rest
  }: InputPasswordProps) {

  const [stylesInput, setStylesInput] = useState<TextStyle[]>([styles.input]);
  const [showPassword, setShowPassword] = useState(false);

  const styleLabel = StyleSheet.create({
    color: {
      color: '#8FA7B3',
    }
  });

  useEffect(() => {
    if (rest.value && rest.value.trim()) {
      setStylesInput([styles.input, styles.noEmpty]);
    }

    else if (error) {
      setStylesInput([styles.input, styles.inputError]);
    }
    
    else {
      setStylesInput([styles.input]);
    }
  }, [rest.value, error]);

  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={error
          ? [styles.labelText, styles.error] 
          : [styles.labelText, styleLabel.color] 
        }>
          {
            error ? labelError : label
          }
        </Text>
      </View>

      <View style={[styles.inputContainer, rest.style]}>
        <TextInput
          { ...rest }
          style={error
            ? [...stylesInput, styles.inputError]
            : [...stylesInput]
          }
          secureTextEntry={!showPassword}
        />

        <View style={styles.buttonShowPasswordContainer}>
          <TouchableOpacity style={styles.buttonShowPassword}
            onPress={() => setShowPassword(!showPassword)
          }>
            { showPassword 
              ? <Image source={eyeOffImg} width={24} height={24} />
              : <Image source={eyeImg} width={24} height={24} />
            }
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default InputPassword;
