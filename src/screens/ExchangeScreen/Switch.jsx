import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


const Switch = ({ isLeft, setLeft }) => {
    return (
        <View style={styles.switch}>
            <TouchableOpacity style={[styles.switchOut, isLeft ? { alignItems: 'flex-start' } : { alignItems: 'flex-end' }]}
                onPress={() => { setLeft(!isLeft) }}>
                <LinearGradient
                    colors={['#FF2CDF', '#8020EF', '#0014FF']}
                    start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}
                    style={styles.switchIn}>
                </LinearGradient>
                <View style={styles.contentSwitch}>
                    <Text style={[styles.textSwitch, isLeft ? { fontWeight: 600 } : { fontWeight: 400 }]}>Mua</Text>
                    <Text style={[styles.textSwitch, isLeft ? { fontWeight: 400 } : { fontWeight: 600 }]}>Bán</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    switch: {
        margin: 30,
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
})

export default Switch
