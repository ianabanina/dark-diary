import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootPage} from '../../app/pages/RootPage';
import DiaryPage from '../../app/pages/DiaryPage';
import {ERoutes, RootStackParams} from '../models/Router.models';

const Stack = createNativeStackNavigator<RootStackParams>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ERoutes.Root} component={RootPage} />
        <Stack.Screen name={ERoutes.Diary} component={DiaryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
