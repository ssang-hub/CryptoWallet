import React, { useEffect, useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"
import axios from 'axios'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const listButton = ['1h', '1d', '1w']
const coinsAPI = {
    Bitcoin: "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7",
    Ethereum: "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7"
}

const Card = ({ coin }) => {
    const [buttonSelected, setSelected] = useState(0)
    const [isloaded, setIsLoaded] = useState(false)
    const [prices, setPrices] = useState(0)
    const [currentPrice, setCurrentPrice] = useState(0)
    const [priceChange, setPriceChange] = useState(0)
    const [percentChange, setPercentChange] = useState(0)

    async function fetchData() {
        try {
            const response = await axios.get(coinsAPI[coin]);
            const data = await response.data;
            await setPrices(data.prices)
            showData()
            setIsLoaded(true)

        } catch (error) {
            console.log(error);
        }
    }

    function showData() {
        try {
            setCurrentPrice(prices[prices.length - 1][1]);
            if (buttonSelected === 0) {
                setPriceChange((currentPrice - prices[prices.length - 2][1]).toFixed(4));
            } else if (buttonSelected === 1) {
                setPriceChange((currentPrice - prices[prices.length - 25][1]).toFixed(4));
            } else {
                setPriceChange((currentPrice - prices[0][1]).toFixed(4));
            }
            setPercentChange((priceChange / (currentPrice - priceChange) * 100).toFixed(4))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log('get data');
        fetchData();
    }, []);

    useEffect(() => {
        showData()
    }, [buttonSelected, isloaded])


    return (
        <View style={styles.card}>
            <View style={styles.cardTop}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={styles.circle} />
                    <Text style={{ fontWeight: 600, fontSize: 18, color: '#FFFFFF' }}>{coin}</Text>
                </View>
                <View >
                    <Text style={{ fontWeight: 500, fontSize: 16, color: '#CACACA', marginTop: 7, }}>{currentPrice + "$"}</Text>
                </View>

            </View>
            <View style={styles.cardCenter}>
                <View style={{ flex: 1, borderRightWidth: 1, borderRightColor: '#373070', justifyContent: 'center', marginVertical: 12 }}>
                    <Text style={styles.cardCenterText}>{priceChange + "$"}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginVertical: 12 }}>
                    <Text style={styles.cardCenterText}>{percentChange + "%"}</Text>
                </View>
            </View>
            <View style={styles.cardBottom}>
                {listButton.map((button, index) => {
                    const isSelected = (index === buttonSelected)
                    return (
                        <TouchableOpacity
                            key={button}
                            onPress={() => {
                                setSelected(index);
                            }}
                            style={isSelected ? styles.buttonSelected : styles.buttonUnselected}>
                            <Text style={styles.textbutton}>{button}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}


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

})

export default Card;