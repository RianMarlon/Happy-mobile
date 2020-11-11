import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

import styles from './styles';

export interface InputProps extends TextInputProps {
  label: string;
  labelError?: string;
  error?: boolean;
  comment?: string;
}

function Input({
    label, comment, labelError, error, ...rest
  }: InputProps) {

  const [stylesInput, setStylesInput] = useState([styles.input, rest.style]);

  const styleLabel = StyleSheet.create({
    color: {
      color: '#8FA7B3',
    }
  });

  useEffect(() => {
    if (rest.value && rest.value.trim()) {
      setStylesInput([styles.input, rest.style, styles.noEmpty]);
    }

    else if (error) {
      setStylesInput([styles.input, rest.style, styles.inputError]);
    }

    else {
      setStylesInput([styles.input, rest.style]);
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
        <Text style={styles.comment}>
          { !error && comment }
        </Text>
      </View>
      <TextInput
        { ...rest }
        style={stylesInput}
      />
    </View>
  );
}

export default Input;
