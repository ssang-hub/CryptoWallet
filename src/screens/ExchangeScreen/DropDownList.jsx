import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal
} from 'react-native'


const DropDownList = ({ data, value, show, onSelect = () => { } }) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    style={{ flexDirection: 'row' }}
                    onPress={onSelect}>
                    <Text style={{ color: '#fff', marginRight: 4 }}>{value}</Text>
                    <Image
                        source={require('../../../assets/expand-arrow.png')}
                        style={{
                            alignSelf: 'center',
                            resizeMode: 'contain',
                            width: 9,
                            transform: [{ rotate: show ? '0deg' : '180deg' }]
                        }} />
                </TouchableOpacity>

            </View>
            {show && (<View>
                {data.map((val) => {
                    return (
                        <TouchableOpacity
                            key={val}
                            onPress={onSelect}>
                            <Text>{val}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        height: 27,
        width: 70,
        backgroundColor: '#282654',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selection: {
        backgroundColor: '#282654',
    },
})

export default DropDownList
