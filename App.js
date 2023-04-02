import { StatusBar } from 'expo-status-bar';
import 'react-native-get-random-values';

// Import the the ethers shims (**BEFORE** ethers)
import '@ethersproject/shims';

import { View, StyleSheet } from 'react-native';
import WellCome from './src/screens/Wellcome';
import NewWallet from './src/screens/NewWallet';
import Login from './src/screens/login';
import History from './src/screens/history';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Statistic from './src/screens/statistic';

// import Screen1 from './Screen1';
// import Screen2 from './Screen2';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WellCome" component={WellCome} />
        <Stack.Screen name="newWallet" component={NewWallet} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="history" component={History} />
        <Stack.Screen name="statistic" component={Statistic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
