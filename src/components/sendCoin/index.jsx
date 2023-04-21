import { useEffect, useState, useContext } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { accountTargetSelector } from '../../store/selector';
import { estimateETHTransferFee, transferETH } from '../../main/eth-transfer';
import { getAllAccounts } from '../../main/account';
import walletContext from '../../context/walletContext';

import { setAccounts } from '../../store/reducers/account.slice';
import { setTarget } from '../../store/reducers/accountTarget.slice';
import { accountSelector } from '../../store/selector';

const windowWidth = Dimensions.get('window').width;

const sendCoinContainer = ({ modalVisible, setModalVisible }) => {
  const account = useSelector(accountTargetSelector);
  const list_account = useSelector(accountSelector);

  const [myWallet, setMyWallet] = useContext(walletContext);

  const [to, setTo] = useState();
  const [value, setValue] = useState();
  const [transferFee, setTransferFee] = useState();
  const [gasPrice, setGasPrice] = useState();

  const [transferLoading, setTransferLoading] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (account && to && value) {
      const newTransferFee = async () => {
        const data = await estimateETHTransferFee({ from: account.address, to, value });
        setGasPrice(data.gasPrice);
        setTransferFee(data.feeInEth);
      };
      newTransferFee();
    }
  }, [to, account, value]);

  const findAccountInWallet = () => {
    const newAccounts = list_account.map((item) => {
      if (item.address.toString() === to.toString()) {
        console.log(typeof item.balance);
        return { ...item, balance: parseFloat(item.balance) + parseFloat(value) };
      } else if (item.address.toString() === account.address.toString()) {
        return { ...item, balance: account.balance - parseFloat(value).toFixed(5) - parseFloat(transferFee).toFixed(5) };
      }
      return item;
    });

    const updateAccTarget = { ...account, balance: account.balance - parseFloat(value).toFixed(5) - parseFloat(transferFee).toFixed(5) };

    dispatch(setTarget(updateAccTarget));
    dispatch(setAccounts(newAccounts));
  };
  const handlerTransfer = async () => {
    try {
      setTransferLoading(true);
      setTimeout(async () => {
        await transferETH({ wallet: myWallet, from: account.address, to, value, gasPrice });
        setTransferLoading(false);

        // find receiver Account in wallet
        findAccountInWallet();
        //
        setTransferFee(undefined);
        console.log('success transfer');
        setTransferSuccess(true);
      }, 0.01);
    } catch (error) {
      console.log(error);
    }
  };

  const backToHome = () => {
    setTransferSuccess(false);
    setModalVisible(false);
  };
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
            {transferSuccess ? (
              <View style={{ ...styles.modalView, top: '100%' }}>
                <View style={styles.successBorder}>
                  <Icon name="check" size={30} color={'white'} />
                </View>
                <Text style={{ fontSize: 20, color: 'white' }}>Giao dịch thành công</Text>
                <TouchableOpacity style={styles.btnBackToHome} onPress={() => backToHome()}>
                  <Text style={{ color: 'white' }}>Về trang chủ</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.modalView}>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                  <Icon name="chevron-small-down" size={25} color={'white'} />
                </Pressable>
                <View style={{ ...styles.inputContainer, paddingHorizontal: 0 }}>
                  <Text style={styles.textWhite}>Ngừơi gửi:</Text>
                  <View style={{ ...styles.textInput, paddingHorizontal: 10, paddingVertical: 12 }}>
                    <Text style={{ color: 'white', width: '65%' }}>{`số dư: ${account.balance}`}</Text>
                    {/* <TextInput style={{ color: 'white', width: '70%' }} editable={false} placeholder={`số dư: ${account.balance}`} /> */}
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.textWhite}>Ngừơi nhận:</Text>
                  <View style={{ ...styles.textInput }}>
                    <TextInput style={{ color: 'white', width: '60%' }} onChangeText={(address) => setTo(address)} />
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.textWhite}>Số coin gửi:</Text>
                  <View style={{ ...styles.textInput }}>
                    <TextInput style={{ color: 'white', width: '60%' }} onChangeText={(numberCoin) => setValue(numberCoin)} />
                  </View>
                </View>

                <View style={{ marginVertical: 20 }}>
                  <Text style={styles.textWhite}>Phí giao dịch: {transferFee || 0.0} ETH</Text>
                </View>
                <View style={{ paddingBottom: 20 }}>
                  <Pressable style={[styles.button, styles.buttonPayment]} disabled={!value || !to || transferLoading} onPress={() => handlerTransfer()}>
                    {transferLoading ? <ActivityIndicator size="small" /> : <Text style={styles.textStyle}>Gửi</Text>}
                  </Pressable>
                </View>
              </View>
            )}
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
    top: '50%',
    // left: '0%',
  },

  successBorder: {
    height: 100,
    width: 100,
    marginTop: 20,
    backgroundColor: '#33BD1C',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
  textWhite: {
    paddingTop: 10,
    paddingRight: 10,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 20,
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
  btnBackToHome: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: '#A25CC2',
    borderRadius: 30,
    marginVertical: 20,
  },
});

export default sendCoinContainer;
