import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import GroupBarChar from '../../components/BarChar';
import globalStyles from '../../../style.global';
import StatisticOptions from '../../components/StatisticOptions';
import NavBar from '../../components/navbar';
import PreviousBtn from '../../components/previousBtn';
import { getCoinPrice } from '../../main/coin-price';

const windowWidth = Dimensions.get('window').width;

function Statistic({ navigation }) {
  const [coin1, setCoin1] = useState();
  const [coin2, setCoin2] = useState();
  useEffect(() => {
    const handleGetCoinPrice = async () => {
      try {
        const coin1Price = await getCoinPrice('ETH');
        const coin2Price = await getCoinPrice('BTC');
        setCoin1(coin1Price);
        setCoin2(coin2Price);
      } catch (error) {
        console.log(error);
      }
    };
    handleGetCoinPrice();
  }, []);
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.positionRelative }}>
      <View style={{ ...globalStyles.positionAbsolute }}>
        <Image style={{ width: windowWidth }} source={require('../../../assets/backgroudExchangeScreen.png')}></Image>
      </View>
      <View style={{ position: 'absolute' }}>
        <View style={{ flexDirection: 'row', marginTop: 76, left: 0, width: '60%', justifyContent: 'space-between' }}>
          <PreviousBtn navigation={navigation} />
          <Text style={{ color: 'white', fontSize: 20 }}>Thống Kê</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'white', width: '50%', marginTop: 20, textAlign: 'center' }}>Chọn loại tiền ảo và khoảng thời gian bạn muốn kiểm tra</Text>
        </View>
        <View style={{ zIndex: 2 }}>
          <StatisticOptions />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.charContainer}>
            <GroupBarChar />
          </View>
        </View>
      </View>
      <View style={{ bottom: 0, position: 'absolute' }}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  charContainer: { backgroundColor: '#221F3A', width: '90%', borderRadius: 50, alignItems: 'center' },
});

export default Statistic;
