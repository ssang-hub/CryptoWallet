import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import globalStyles from '../../../style.global';
import { newWallet, unlockWallet } from '../../main/wallet';

function NewWallet({ navigation }) {
  const createWallet = () => {
    try {
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.positionRelative }}>
      <View style={{ marginVertical: 100, display: 'flex', height: '80%' }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', ...globalStyles.positionAbsolute, right: 30 }}>
          <Icon.Button
            name="chevron-thin-left"
            size={25}
            color={'#FF2CDF'}
            backgroundColor={'#221F3A'}
            onPress={() => {
              navigation.navigate('WellCome');
            }}
          ></Icon.Button>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginLeft: 40 }}>Tạo ví mới</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 80 }}>
          <Image source={require('../../../assets/bubble.png')} />
        </View>
        <View style={{ alignItems: 'center', marginTop: -20, ...globalStyles.positionAbsolute, top: 350, left: -50 }}>
          <View style={styles.inputView}>
            <TextInput style={styles.TextInput} placeholder="Mật khẩu." placeholderTextColor="gray" secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Nhập lại mật khẩu."
              placeholderTextColor="gray"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <LinearGradient colors={['#FF2CDF', '#8020EF', '#0014FF']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={styles.button}>
            <TouchableOpacity onPress={() => createWallet()}>
              <Text style={{ color: 'white', fontSize: 17 }}>Tạo ví</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#221F3A',
    alignItems: 'center',
    flex: 1,
  },
  inputView: {
    backgroundColor: '#221F3A',
    borderRadius: 30,
    height: 45,
    marginBottom: 20,
    width: 300,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },
  TextInput: {
    height: 50,
    padding: 10,
    marginLeft: 20,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 30,
    paddingVertical: 10,
  },
});
export default NewWallet;
