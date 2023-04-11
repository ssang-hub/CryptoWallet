import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import globalStyles from '../../../style.global';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

function Wallets({ navigation }) {
  const [wallets, SetWallets] = useState([
    { id: 1, name: 'metamask', accBal: 3000 },
    { id: 2, name: 'automicwallet', accBal: 5120 },
    { id: 3, name: 'mycelium', accBal: 4000 },
  ]);
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.positionRelative }}>
      <LinearGradient style={styles.sidebarButton} colors={['#0014FF', '#8020EF', '#FF2CDF']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
        <View>
          <Image source={require('../../../assets/sidebar.png')} />
        </View>
      </LinearGradient>
      <View style={styles.walletsContainer}>
        <Text style={{ color: 'white', marginVertical: 50 }}>Chọn loại ví muốn kiểm tra số dư tài khoản</Text>
        <View>
          {wallets.map((wallet) => (
            <TouchableOpacity style={styles.walletStyle} key={wallet.id}>
              <Text style={styles.walletName}>{wallet.name}</Text>
              <Text style={styles.walletAccBal}>${wallet.accBal}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebarButton: {
    position: 'absolute',
    top: 60,
    paddingHorizontal: 10,
    paddingVertical: 10,
    left: 0,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: 'blue',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  walletsContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  walletStyle: {
    backgroundColor: '#8020ef3d',
    paddingVertical: 20,
    borderColor: '#8020EF',
    borderWidth: 1,
    marginVertical: 20,
    borderRadius: 30,
    width: 180,
    alignItems: 'center',
  },
  walletName: {
    color: 'white',
  },
  walletAccBal: {
    color: 'white',
    fontSize: 23,
  },
});
export default Wallets;
