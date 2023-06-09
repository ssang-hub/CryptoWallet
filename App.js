// import 'react-native-get-random-values';

// // Import the the ethers shims (**BEFORE** ethers)
// import '@ethersproject/shims';

import { StyleSheet } from 'react-native';
import WellCome from './src/screens/Wellcome';
import NewWallet from './src/screens/NewWallet';
import Login from './src/screens/login';
import History from './src/screens/history';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Statistic from './src/screens/statistic';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import Wallets from './src/screens/Wallets';
import ExchangeScreen from './src/screens/ExchangeScreen/ExchangeScreen';
import { Provider } from 'react-redux';
import store from './src/store/index';
import WalletProvider from './src/context/walletProvider';
// import Screen1 from './Screen1';
// import Screen2 from './Screen2';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <WalletProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WellCome" component={WellCome} />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="newWallet" component={NewWallet} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="history" component={History} />
            <Stack.Screen name="statistic" component={Statistic} />
            <Stack.Screen name="wallets" component={Wallets} />
            <Stack.Screen name="ExchangeScreen" component={ExchangeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </WalletProvider>
  );
}

const styles = StyleSheet.create({});
