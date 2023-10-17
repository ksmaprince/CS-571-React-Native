import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stack from './StackNavigation/Stack'
import DrawerNavigation from './DrawerNavigation/Drawer';
import { useState } from 'react';
import { TabNavigator } from './TabNavigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack/> */}

      {/* <DrawerNavigation /> */}

      <TabNavigator/>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
