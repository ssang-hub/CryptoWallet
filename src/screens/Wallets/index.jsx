import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import globalStyles from '../../../style.global';
import { useDispatch, useSelector } from 'react-redux';
import { accountSelector, walletSelector } from '../../store/selector';
import { setTarget } from '../../store/reducers/accountTarget.slice';
import { addAccount } from '../../store/reducers/account.slice';
import { createAccount } from '../../main/account';

function Wallets({ navigation }) {
  const wallet = useSelector(walletSelector);

  const myaccounts = useSelector(accountSelector);
  const dispatch = useDispatch();
  const changeTarget = (wallet) => {
    dispatch(setTarget(wallet));
    navigation.navigate('home');
  };

  const createNewAccount = async () => {
    try {
      // parse wallet string to wallet object
      const walletJSON = await JSON.parse(wallet);
      console.log(walletJSON.mnemonic);
      const accountCreate = await createAccount(walletJSON);
      dispatch(addAccount(accountCreate));
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
                <Text style={styles.walletAccBal}>${item.balance}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.address}
          />
        </View>
        <Text style={styles.textButton} onPress={() => createNewAccount()}>
          Thêm tài khoản
        </Text>
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
