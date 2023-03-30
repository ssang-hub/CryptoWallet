import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import globalStyles from '../../../style.global';
function Login({ navigation }) {
  const handleLogin = () => {
    // logic code
    navigation.navigate('history');
  };
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.justifyContentSpaceAround, ...globalStyles.positionRelative }}>
      <View style={{ ...globalStyles.positionAbsolute, top: 50 }}>
        <Text style={{ color: 'white', fontSize: 17 }}>Đăng Nhập</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput} placeholder="Mật khẩu." placeholderTextColor="gray" secureTextEntry={true} />
      </View>
      <View>
        <Image source={require('../../../assets/bubble.png')} />
      </View>
      <View>
        <LinearGradient colors={['#0014FF', '#8020EF', '#FF2CDF']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={globalStyles.buttonLinear}>
          <TouchableOpacity onPress={() => handleLogin()}>
            <Text style={{ color: 'white' }}>Đăng Nhập</Text>
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
});

export default Login;
