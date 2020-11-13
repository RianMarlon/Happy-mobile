import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import OrphanageVisitation from './pages/CreateOrphanage/OrphanageVisitation';
import OnboardingPage from './pages/OnboardingPage';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

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
      <NavigationContainer>
        <Navigator screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#F2F3F5'
          }
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
            name="OrphanagesMap" 
            component={OrphanagesMap}
          />
          <Screen
            name="OrphanageDetails"
            component={OrphanageDetails}
            options={{
              headerShown: true,
              header: () => <Header showCancel={false} title="Orfanato" />
            }}
          />
          <Screen
            name="SelectMapPosition"
            component={SelectMapPosition}
            options={{
              headerShown: true,
              header: () => <Header title="Selecione no mapa" />
            }}
          />
          <Screen 
            name="OrphanageData"
            component={OrphanageData}
            options={{
              headerShown: true,
              header: () => <Header title="Informe os dados" />
            }}
          />
          <Screen 
            name="OrphanageVisitation"
            component={OrphanageVisitation}
            options={{
              headerShown: true,
              header: () => <Header title="Informe os dados" />
            }}
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
      </NavigationContainer>
    );
  }
}

export default Routes;