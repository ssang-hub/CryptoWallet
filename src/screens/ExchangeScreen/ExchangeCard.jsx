import React, { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TextInput,
    FlatList,
    Image,
    Button,
    Modal
} from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownList from "./DropDownList";
import ExchangeTextFeild from "./ExchangeTextFeild";
import Switch from "./Switch";

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height



const ExchangeCard = () => {

    const coinList = ['BTC', 'ETH', 'ABC']
    const [coinSelected, setCoinSelected] = useState(coinList[0])
    const [coinListOpen, setCoinListOpen] = useState(false)

    const currencyList = ['USD', 'EUR', 'VND']
    const [currencySelected, setCurrencySelected] = useState(currencyList[0])
    const [currencyListOpen, setCurrencyListOpen] = useState(false)



    const [isBuy, setBuy] = useState(true)


    return (
        <View style={styles.container}>
            <Switch
                isLeft={isBuy}
                setLeft={setBuy} />
            <View style={styles.body}>
                <View style={styles.conversionRate}>
                    <Text style={{ color: '#CACACA', fontSize: 16, marginRight: 10 }}>1 ETH = 2323442 EUR</Text>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/reload.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.input}>

                    <ExchangeTextFeild
                        style={{ marginTop: 30 }}
                        value={coinSelected}
                        showList={coinListOpen}
                        setShowList={setCoinListOpen}
                        placeholder={'15.00-5000.00'}
                        editable={true} />

                    <ExchangeTextFeild
                        style={{ marginTop: 30 }}
                        value={currencySelected}
                        showList={currencyListOpen}
                        setShowList={setCurrencyListOpen}
                        placeholder={'0.00'}
                        editable={false} />

                    {coinListOpen && (<DropDownList
                        style={{ marginTop: 36 }}
                        data={coinList}
                        show={coinListOpen}
                        setShow={setCoinListOpen}
                        setSelected={setCoinSelected} />)}

                    {currencyListOpen && (<DropDownList
                        style={{ marginTop: 44 + 30 + 30 }}
                        data={currencyList}
                        show={currencyListOpen}
                        setShow={setCurrencyListOpen}
                        setSelected={setCurrencySelected} />)}

                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => {

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
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        margin: 28,
        alignItems: 'center',
        backgroundColor: '#1c1933',
        height: windowHeight / 2.5,
        width: windowWidth - 28 * 2,
        borderRadius: 25,
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
        marginTop: 20,
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
        marginTop: 30,
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
        fontSize: 18,
        fontWeight: 600,
        color: '#FFFFFF',
    }

})

export default ExchangeCard