import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function NewWallet({ navigation }) {
  const [password, setPassword] = useState();
  const [passwordConfirm, setpasswordConfirm] = useState();

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 100, display: 'flex', justifyContent: 'space-between', height: '80%' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Tạo ví mới</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../../assets/bubble.png')} />
        </View>

        <View style={{ alignItems: 'center', marginTop: -20 }}>
          <View style={styles.inputView}>
            <TextInput style={styles.TextInput} placeholder="Username." placeholderTextColor="#003f5c" secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
          </View>
          <View style={styles.inputView}>
            <TextInput style={styles.TextInput} placeholder="Password." placeholderTextColor="#003f5c" secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
          </View>

          <LinearGradient colors={['#FF2CDF', '#8020EF', '#0014FF']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('newWallet')}>
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
    flex: 1,
    padding: 10,
    marginLeft: 20,
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
