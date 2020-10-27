import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

import styles from './styles';

interface InputProps extends TextInputProps {
  label: string;
  labelError?: string;
  error?: boolean;
  required?: boolean;
  comment?: string;
}

function Input({
    label, required=false, comment, labelError, error, ...rest
  }: InputProps) {

  const styleLabel = StyleSheet.create({
    color: {
      color: '#8FA7B3',
    }
  });

  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={error && required 
          ? [styles.labelText, styles.error] 
          : [styles.labelText, styleLabel.color] 
        }>
          {
            error && required ? labelError : label
          }
        </Text>
        <Text style={styles.comment}>
          { !error && comment }
        </Text>
      </View>
      <TextInput
        { ...rest }
        style={[styles.input, rest.style]}
      />
    </View>
  );
}

export default Input;
