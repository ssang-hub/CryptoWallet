import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../../../style.global';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const listButton = ['now', '1h', '1d'];
// const coinsAPI = {
//   Bitcoin: 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7',
//   Ethereum: 'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7',
// };

const Card = ({ token, handleSendToken }) => {
  const [buttonSelected, setSelected] = useState('now');
  //   const [isloaded, setIsLoaded] = useState(false);
  //   const [currentPrice, setCurrentPrice] = useState(0);
  //   const [priceChange, setPriceChange] = useState(0);
  const [precentToken, setPrecentToken] = useState(token.tokenHistoricalPrice[0]);

  useEffect(() => {
    let keysearch = undefined;
    if (buttonSelected === 'now') {
      setPrecentToken(token.tokenHistoricalPrice[0]);
    } else if (buttonSelected === '1h') {
      setPrecentToken(token.tokenHistoricalPrice[2]);
    } else if (buttonSelected === '1d') {
      setPrecentToken(token.tokenHistoricalPrice[3]);
    }
  }, [buttonSelected]);

  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(coinsAPI['Bitcoin']);
  //       const data = await response.data;
  //       setPrices(data.prices);
  //       showData();
  //       setIsLoaded(true);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   function showData() {
  //     try {
  //       setCurrentPrice(prices[prices.length - 1][1]);
  //       if (buttonSelected === 0) {
  //         setPriceChange((currentPrice - prices[prices.length - 2][1]).toFixed(4));
  //       } else if (buttonSelected === 1) {
  //         setPriceChange((currentPrice - prices[prices.length - 25][1]).toFixed(4));
  //       } else {
  //         setPriceChange((currentPrice - prices[0][1]).toFixed(4));
  //       }
  //       setPercentChange(((priceChange / (currentPrice - priceChange)) * 100).toFixed(4));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   useEffect(() => {
  //     console.log('get data');
  //     fetchData();
  //   }, []);

  //   useEffect(() => {
  //     showData();
  //   }, [buttonSelected, isloaded]);

  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.circle} />
            <Text style={{ fontWeight: 600, fontSize: 18, color: '#FFFFFF' }}>{token.symbol}</Text>
          </View>
          <LinearGradient
            colors={['#0014FF', '#8020EF', '#FF2CDF']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{ ...globalStyles.buttonLinear, paddingHorizontal: 10, marginLeft: 30 }}
          >
            <TouchableOpacity onPress={() => handleSendToken(token)}>
              <Text style={{ color: 'white' }}>Gửi Token</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View>
          <Text style={{ fontWeight: 500, fontSize: 16, color: '#CACACA', marginTop: 7 }}>{token.balance}$</Text>
        </View>
      </View>
      <View style={styles.cardCenter}>
        <View style={{ flex: 1, borderRightWidth: 1, borderRightColor: '#373070', justifyContent: 'center', marginVertical: 12 }}>
          <Text style={styles.cardCenterText}>{precentToken.price} $</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', marginVertical: 12 }}>
          <Text style={styles.cardCenterText}>{parseFloat(precentToken.percent).toFixed(3)}%</Text>
        </View>
      </View>
      <View style={styles.cardBottom}>
        {listButton.map((button, index) => {
          const isSelected = button === buttonSelected;
          return (
            <TouchableOpacity key={button} style={isSelected ? styles.buttonSelected : styles.buttonUnselected} onPress={() => setSelected(button)}>
              <Text style={styles.textbutton}>{button}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titlePageView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 48,
  },

  tokensText: {
    fontWeight: 600,
    fontSize: 20,
    color: '#FFFFFF',
  },

  cardView: {
    flex: 6,
  },

  card: {
    backgroundColor: '#292452',
    width: windowWidth - 80,
    marginHorizontal: 40,
    marginBottom: 60,
    borderRadius: 20,
  },

  cardTop: {
    flex: 1.5,
    margin: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circle: {
    marginRight: 14,
    height: 16,
    width: 16,
    borderRadius: 30,
    backgroundColor: '#FA9F42',
  },

  cardCenter: {
    flex: 1.5,
    flexDirection: 'row',
    borderBottomColor: '#373070',
    borderBottomWidth: 1,
    borderTopColor: '#373070',
    borderTopWidth: 1,
    alignItems: 'center',
    marginHorizontal: 14,
  },
  cardCenterText: {
    flex: 1,
    color: '#20FC8F',
    fontSize: 15,
    fontWeight: 400,
    textAlign: 'center',
  },

  cardBottom: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
  },

  buttonSelected: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 26,
    backgroundColor: '#373070',
    borderColor: '#373070',
    borderRadius: 5,
    borderWidth: 1,
  },

  buttonUnselected: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 24,
    borderColor: '#373070',
    borderRadius: 5,
    borderWidth: 1,
  },

  textbutton: {
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,
  },
});

export default Card;
