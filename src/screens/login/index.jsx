import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import globalStyles from '../../../style.global';
import { unlockWallet } from '../../main/wallet';
import { useDispatch } from 'react-redux';

import { getAllAccounts } from '../../main/account';

import walletContext from '../../context/walletContext';

// redux slice
// import { setWallet } from '../../store/reducers/Wallet.slice';
import { setAccounts } from '../../store/reducers/account.slice';
import { setTarget } from '../../store/reducers/accountTarget.slice';

function Login({ navigation }) {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [, setMyWallet] = useContext(walletContext);
  const loginSuccess = async (wallet) => {
    try {
      // console.log('mywallet', JSON.stringify(wallet));
      setMyWallet(wallet);
      // dispatch(setWallet(wallet));
      console.log('mywallet2', wallet);
      const accounts = await getAllAccounts(wallet);
      dispatch(setAccounts(accounts));
      dispatch(setTarget(accounts[0]));

      navigation.navigate('home');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const loginFailure = () => {
    setWrongPassword(true);
    setLoading(false);
  };
  const loginFunction = async () => {
    setLoading(true);
    const loginResult = await unlockWallet(password);
    loginResult.status === 'success' ? loginSuccess(loginResult.wallet) : loginFailure();
  };
  // useEffect(() => {
  //   if (isLoading) {
  //     const handleLogin = async () => {
  //       try {
  //         const loginResult = await unlockWallet(password);
  //         loginResult === 'success' ? navigation.navigate('home') : console.log('sai mat khau');
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     handleLogin();
  //   }
  // }, [isLoading]);

  return (
    <View style={{ ...globalStyles.container, ...globalStyles.justifyContentSpaceAround, ...globalStyles.positionRelative }}>
      <View style={{ ...globalStyles.positionAbsolute, top: 50 }}>
        <Text style={{ color: 'white', fontSize: 17 }}>Đăng Nhập</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          disableFullscreenUI={true}
          placeholder="Mật khẩu."
          editable={!isLoading}
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={(password) => {
            setPassword(password);
          }}
        />
        {wrongPassword && (
          <View style={styles.wrongPassword}>
            <Text style={{ color: 'red' }}>Mật khẩu không chính xác</Text>
          </View>
        )}
      </View>
      <View>
        <Image source={require('../../../assets/bubble.png')} />
      </View>
      <View>
        <LinearGradient colors={['#0014FF', '#8020EF', '#FF2CDF']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={globalStyles.buttonLinear}>
          <TouchableOpacity disabled={isLoading} onPress={() => loginFunction()}>
            {isLoading ? (
              <View>
                <ActivityIndicator size="small" />
              </View>
            ) : (
              <Text style={{ color: 'white' }}>Đăng Nhập</Text>
            )}
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#221F3A',
    borderRadius: 30,
    height: 45,
    width: 300,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 30,
    position: 'relative',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
  wrongPassword: { position: 'absolute', bottom: -30, right: 0 },
});

export default Login;
