import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import OrphanagesMap from '../pages/OrphanagesMap';
import OrphanageDetails from '../pages/OrphanageDetails';
import SelectMapPosition from '../pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from '../pages/CreateOrphanage/OrphanageData';
import OrphanageVisitation from '../pages/CreateOrphanage/OrphanageVisitation';
import Success from '../pages/Success';
import Cancel from '../pages/Cancel';

const { Navigator, Screen } = createStackNavigator();

function Routes() {

  return (
      <Navigator screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#F2F3F5'
        }
      }}>
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
  );
}

export default Routes;