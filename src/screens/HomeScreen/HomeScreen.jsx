import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Card from './Card';
import NavBar from '../../components/navbar';
import QRCodeReceiver from '../../components/QRCode';
import SendCoin from '../../components/sendCoin';
import { accountTargetSelector } from '../../store/selector';

import { getTokenList, estimateTokenTransferFee, transferToken } from '../../main/token';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// const listCoins = ['Bitcoin', 'Ethereum'];

const listButton = ['30m', '1h', '1d'];

function HomeScreen({ navigation }) {
  const [visibleReceive, setVisibleReceive] = useState(false);
  const [visibleSend, setVisibleSend] = useState(false);
  const [tokens, setTokens] = useState([]);

  const [tokenSend, setTokenSend] = useState();

  const accTarget = useSelector(accountTargetSelector);
  useEffect(() => {
    const getAllTokens = async () => {
      console.log('address: ' + accTarget.address);
      const tokensData = await getTokenList(accTarget.address);
      setTokens(tokensData);
    };
    getAllTokens();
  }, [accTarget]);

  // handle send token request
  const handleSendToken = async (token) => {
    setTokenSend(token);
    setVisibleSend(true);
  };

  return (
    <View style={visibleReceive ? { flex: 1, opacity: 0.7 } : { flex: 1 }}>
      <Image source={require('../../../assets/bgImg.png')} style={styles.imageBG} />
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.infomation}>
            <Text style={styles.nameAccount}> {accTarget.name}</Text>
            <Text style={styles.money}> {accTarget.balance} ETH</Text>
            <View style={styles.funtion}>
              <TouchableOpacity
                onPress={() => {
                  setVisibleSend(true);
                }}
              >
                <View style={styles.functionIcon}>
                  <Image source={require('../../../assets/send.png')} />
                </View>
                <Text style={styles.funtionText}>Gửi</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setVisibleReceive(true);
                }}
              >
                <View style={styles.functionIcon}>
                  <Image source={require('../../../assets/receive.png')} />
                </View>
                <Text style={styles.funtionText}>Nhận</Text>
              </TouchableOpacity>
              <QRCodeReceiver modalVisible={visibleReceive} setModalVisible={setVisibleReceive} />
              <SendCoin modalVisible={visibleSend} setModalVisible={setVisibleSend} tokenSend={tokenSend} setTokenSend={setTokenSend} />
              <TouchableOpacity>
                <View style={styles.functionIcon}>
                  <Image source={require('../../../assets/send.png')} />
                </View>
                <Text style={styles.funtionText}>Mua</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.pagerView}>
            <View style={styles.titlePageView}>
              <Text style={styles.tokensText}>Tokens</Text>
            </View>
            <View style={styles.cardView}>
              <FlatList
                data={tokens}
                renderItem={({ item }) => <Card token={item} handleSendToken={handleSendToken} />}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                style={{ flex: 1 }}
              ></FlatList>
            </View>
          </View>
        </View>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  body: {
    flex: 9,
    alignItems: 'center',
  },

  bottomBar: {
    flex: 1,
    backgroundColor: 'red',
  },

  imageBG: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#221F3A',
  },

  infomation: {
    flex: 1,
  },

  nameAccount: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 80,
    color: '#fff',
  },

  money: {
    fontSize: 40,
    fontWeight: 600,
    textAlign: 'center',
    color: '#FFCDEA',
  },

  funtion: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    width: 160,
  },

  functionIcon: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  funtionText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 300,
    fontSize: 14,
  },

  pagerView: {
    height: windowHeight * 0.45,
    width: '100%',
    backgroundColor: '#221F3A',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignContent: 'center',
    justifyContent: 'space-around',
    color: '#FFFFFF',
  },

  titlePageView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 48,
  },

  tokensText: {
    fontWeight: 600,
    fontSize: 24,
    color: '#FFFFFF',
  },

  cardView: {
    flex: 5,
  },
  tokensText: {
    fontWeight: 600,
    fontSize: 24,
    color: '#FFFFFF',
  },

  navbar: {
    backgroundColor: '#221F3A',
  },
});

export default HomeScreen;
