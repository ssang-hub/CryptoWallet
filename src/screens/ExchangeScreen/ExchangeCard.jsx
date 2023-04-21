import React, { useEffect, useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import DropDownList from "./DropDownList";
import ExchangeTextFeild from "./ExchangeTextFeild";
import Switch from "./Switch";
import axios from 'axios'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd%2Ceur%2Cvnd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false&precision=4'


const ExchangeCard = () => {

    const coinList = ['BTC', 'ETH']
    const [coinSelected, setCoinSelected] = useState(coinList[0])
    const [coinListOpen, setCoinListOpen] = useState(false)

    const currencyList = ['USD', 'EUR', 'VND']
    const [currencySelected, setCurrencySelected] = useState(currencyList[0])
    const [currencyListOpen, setCurrencyListOpen] = useState(false)

    const [prices, setPrices] = useState(0)
    const [priceExchange, setPriceExchange] = useState(0)

    const [inputValue, setInputValue] = useState(0)
    const [exchangeValue, setExchangeValue] = useState(0)

    const DICT = { BTC: 'bitcoin', ETH: 'ethereum', USD: 'usd', EUR: 'eur', VND: 'vnd' }

    async function fetchData() {
        try {
            const response = await axios.get(API);
            setPrices(response.data)
            setPriceExchange(prices[DICT[coinSelected]][DICT[currencySelected]])
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        try {
            setPriceExchange(prices[DICT[coinSelected]][DICT[currencySelected]])
        } catch (error) {
            console.log(error)
        }
    }, [coinSelected, currencySelected])

    const [isBuy, setBuy] = useState(true)


    return (
        <View style={styles.container}>
            <Switch
                isLeft={isBuy}
                setLeft={setBuy} />
            <View style={styles.body}>
                <View style={styles.conversionRate}>
                    <Text style={{ color: '#CACACA', fontSize: 16, marginRight: 10 }}>1 {coinSelected} = {priceExchange} {currencySelected}</Text>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/reload.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.input}>

                    <ExchangeTextFeild
                        style={{ marginTop: 15 }}
                        title={coinSelected}
                        showList={coinListOpen}
                        setShowList={setCoinListOpen}
                        placeholder={'0.00-5000.00'}
                        editable={true}
                        getValue={setInputValue} />

                    <ExchangeTextFeild
                        style={{ marginTop: 30 }}
                        title={currencySelected}
                        showList={currencyListOpen}
                        setShowList={setCurrencyListOpen}
                        placeholder={'0.00'}
                        editable={false}
                        textShow={exchangeValue} />

                    <TouchableOpacity
                        style={styles.containerButton}
                        onPress={() => {
                            setExchangeValue((inputValue * exchangeValue).toFixed(4))
                        }}>
                        <LinearGradient
                            colors={['#FF2CDF', '#8020EF', '#0014FF']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.exchangeButton}>
                            <Text style={styles.exchangeText}>
                                Chuyển đổi
                            </Text>

                        </LinearGradient>
                    </TouchableOpacity>

                    {coinListOpen && (<DropDownList
                        style={{ marginTop: 21 }}
                        data={coinList}
                        show={coinListOpen}
                        setShow={setCoinListOpen}
                        setSelected={setCoinSelected} />)}

                    {currencyListOpen && (<DropDownList
                        style={{ marginTop: 89 }}
                        data={currencyList}
                        show={currencyListOpen}
                        setShow={setCurrencyListOpen}
                        setSelected={setCurrencySelected} />)}

                </View>
                <View style={styles.containerButton}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: '#1c1933',
        height: windowHeight / 2.3,
        width: windowWidth - 28 * 2,
        borderRadius: 25,
    },

    body: {
        flex: 1,
    },

    input: {
        justifyContent: 'space-between',
    },

    conversionRate: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    textField: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 38,
        width: 270,
        borderColor: '#7f7f7f',
        borderWidth: 1,
        borderRadius: 30,
    },

    containerButton: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    exchangeButton: {
        height: 40,
        width: 120,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },

    exchangeText: {
        fontSize: 16,
        fontWeight: 600,
        color: '#FFFFFF',
    }

})

export default ExchangeCard