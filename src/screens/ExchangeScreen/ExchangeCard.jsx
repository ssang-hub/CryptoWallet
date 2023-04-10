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
import { enableFreeze } from "react-native-screens";

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height



const ExchangeCard = () => {

    const coinList = ['BTC', 'ETH']
    const [coinSelected, setCoinSelected] = useState(coinList[0])
    const [coinListOpen, setCoinListOpen] = useState(false)
    const onSelecCoin = (val) => {
        setCoinSelected(val)
        setCoinListOpen(!coinListOpen)
    }

    const currencyList = ['USD', 'EUR', 'VND']
    const [currencySelected, setCurrencySelected] = useState(currencyList[0])
    const [currencyListOpen, setCurrencyListOpen] = useState(false)



    const [isBuy, setBuy] = useState(true)

    const Switch = () => {
        return (
            <View style={styles.switch}>
                <TouchableOpacity style={[styles.switchOut, isBuy ? { alignItems: 'flex-start' } : { alignItems: 'flex-end' }]}
                    onPress={() => { setBuy(!isBuy) }}>
                    <LinearGradient
                        colors={['#FF2CDF', '#8020EF', '#0014FF']}
                        start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}
                        style={styles.switchIn}>
                    </LinearGradient>
                    <View style={styles.contentSwitch}>
                        <Text style={[styles.textSwitch, isBuy ? { fontWeight: 600 } : { fontWeight: 400 }]}>Mua</Text>
                        <Text style={[styles.textSwitch, isBuy ? { fontWeight: 400 } : { fontWeight: 600 }]}>Bán</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Switch />
            <View style={styles.body}>
                <View style={styles.conversionRate}>
                    <Text style={{ color: '#CACACA', fontSize: 16, marginRight: 10 }}>1 ETH = 2323442 EUR</Text>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/reload.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.input}>
                    <View style={styles.textField}>
                        <DropDownList
                            data={coinList}
                            value={coinSelected}
                            show={coinListOpen}
                            onSelect={onSelecCoin}
                        />
                        <TextInput >
                        </TextInput>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 2,
        marginTop: 80,
        margin: 28,
        alignItems: 'center',
        backgroundColor: '#1c1933',
        height: windowHeight / 3,
        width: windowWidth - 28 * 2,
        borderRadius: 25,
    },
    switch: {
        margin: 10,
        height: 40,
        width: 174,
        borderRadius: 25,
        borderColor: '#0014FF',
        borderWidth: 1,
    },

    switchOut: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    switchIn: {
        height: 40,
        width: 90,
        borderRadius: 25,
        backgroundColor: '#0014FF',
    },

    contentSwitch: {
        flex: 1,
        height: 40,
        width: 170,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    textSwitch: {
        color: '#FFFFFF',
        fontSize: 17,
        textAlign: 'center',
    },

    input: {
        zIndex: 2,
        justifyContent: 'space-between',
    },

    conversionRate: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    textField: {
        zIndex: 2,
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

})

export default ExchangeCard