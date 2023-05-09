import { View, StyleSheet, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import globalStyles from '../../../style.global';
import { useDispatch, useSelector } from 'react-redux';
import { accountSelector } from '../../store/selector';
import { setTarget } from '../../store/reducers/accountTarget.slice';
import { setAccounts } from '../../store/reducers/account.slice';
import { createAccount } from '../../main/account';
import { useContext, useState } from 'react';
import walletContext from '../../context/walletContext';
function Wallets({ navigation }) {
  const [myWallet, setMyWallet] = useContext(walletContext);
  const [createLoading, setCreateLoading] = useState(false);

  const myaccounts = useSelector(accountSelector);
  const dispatch = useDispatch();
  const changeTarget = (wallet) => {
    dispatch(setTarget(wallet));
    navigation.navigate('home');
  };

  const createNewAccount = async () => {
    try {
      setCreateLoading(true);
      const accountData = await createAccount(myWallet);
      // how to get new AccountName
      const newAccountsArray = [...myaccounts, { address: accountData.address, balance: '0.0', name: accountData.name, privateKey: accountData.privateKey }];
      setCreateLoading(false);
      dispatch(setAccounts(newAccountsArray));
      navigation.navigate('home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ ...globalStyles.container, ...globalStyles.positionRelative }}>
      <View style={styles.walletsContainer}>
        <Text style={{ color: 'white', marginVertical: 50 }}>Chọn loại ví muốn kiểm tra số dư tài khoản</Text>
        <View style={{ height: '70%' }}>
          <FlatList
            data={myaccounts}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.walletStyle} key={item.address} onPress={() => changeTarget(item)}>
                <Text style={styles.walletName}>{item.name}</Text>
                <Text style={styles.walletAccBal}>{item.balance} ETH</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.address}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          {createLoading && (
            <View>
              <ActivityIndicator size="small" />
            </View>
          )}
          <Text style={styles.textButton} disabled={createLoading} onPress={() => createNewAccount()}>
            Thêm tài khoản
          </Text>
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
  textButton: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
export default Wallets;
