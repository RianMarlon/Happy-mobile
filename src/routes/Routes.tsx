import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from '../contexts/AuthContext';

import AppStacks from './AppStacks';

function Routes() {  
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppStacks />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default Routes;