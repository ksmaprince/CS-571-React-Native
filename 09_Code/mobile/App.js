import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import getMessage from './networking';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { GlobalContext } from './Context';

export default function App() {
  const [state, setState] = useState({})
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <Login />
    </GlobalContext.Provider>
  );
}


