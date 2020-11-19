import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingPage from '../pages/OnboardingPage';
import Login from '../pages/Login';
import WhoAreYou from '../pages/Register/WhoAreYou';
import EmailAndPassword from '../pages/Register/EmailAndPassword';
import ForgotPassword from '../pages/ForgotPassword';
import Success from '../pages/Success';
import Cancel from '../pages/Cancel';

const { Navigator, Screen } = createStackNavigator();

function Routes() {

  const [isFirstLaunch, setIsFirstLaunch] = useState<Boolean | null>(null);

  useEffect(() => {
    (async () => {
      const response = await AsyncStorage.getItem('@happy:alreadyLaunched');

      if (response === null) {
        setIsFirstLaunch(true);
        await AsyncStorage.setItem('@happy:alreadyLaunched', 'true');
      }

      else {
        setIsFirstLaunch(false);
      }
    })();
  }, []);

  if (isFirstLaunch === null) {
    return null;
  }

  else {
    return (
      <Navigator screenOptions={{
        headerShown: false
      }}>
        {
          isFirstLaunch && (
            <Screen
              name="Onboarding"
              component={OnboardingPage}
            />
          )
        }
        <Screen
          name="Login"
          component={Login}
        />
        <Screen
          name="WhoAreYou"
          component={WhoAreYou}
        />
        <Screen
          name="EmailAndPassword"
          component={EmailAndPassword}
        />
        <Screen
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <Screen
          name="Success"
          component={Success}
        />
        <Screen
          name="Cancel"
          component={Cancel}
        />
      </Navigator>
    );
  }
}

export default Routes;
