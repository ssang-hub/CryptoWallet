import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Entypo';
import IconCopy from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { addressSelector } from '../../store/selector';
import * as Clipboard from 'expo-clipboard';

const windowWidth = Dimensions.get('window').width;

const QRCodeContainer = ({ modalVisible, setModalVisible }) => {
  const addressWallet = useSelector(addressSelector);
  const [copyAddress, setCopyAddress] = useState(false);
  const handleCopyAddress = async () => {
    await Clipboard.setStringAsync(addressWallet);
    setCopyAddress(true);
  };
  useEffect(() => {
    setCopyAddress(false);
  }, [addressWallet]);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}></View>
        <View style={styles.centeredView}>
          <View>
            <View style={styles.modalView}>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="chevron-small-down" size={25} color={'white'} />
              </Pressable>
              <View style={{ paddingVertical: 30 }}>
                <QRCode size={150} value="https://google.com" backgroundColor="#8020EF" color="white" />
              </View>
              <View style={styles.textInput}>
                <TextInput style={{ color: 'white', width: '60%' }} editable={false} value={addressWallet} />
                <TouchableOpacity disabled={copyAddress} onPress={handleCopyAddress} style={styles.btnCopy}>
                  {copyAddress ? <Icon name="check" size={18} style={{ color: 'green' }} /> : <IconCopy name="copy-outline" size={18} style={{ color: 'white' }} />}
                </TouchableOpacity>
              </View>
              <View style={{ paddingBottom: 20 }}>
                <Pressable style={[styles.button, styles.buttonPayment]}>
                  <Text style={styles.textStyle}>Yêu cầu thành toán</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    position: 'absolute',
  },
  modalView: {
    backgroundColor: '#8020EF',
    borderRadius: 20,
    // padding: 35,
    width: windowWidth,
    paddingHorizontal: 35,
    // height: 300,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    top: '70%',
    // left: '0%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#8020EF',
    paddingHorizontal: 80,
    border: 0,
  },
  buttonPayment: {
    backgroundColor: '#A25CC2',
    paddingHorizontal: 80,
    border: 0,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textInput: {
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom: 5,
    borderRadius: 20,
    flexDirection: 'row',
  },
  btnCopy: {
    padding: 10,
    marginLeft: 30,
  },
});

export default QRCodeContainer;
