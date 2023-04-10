import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native'

const ExchangeTextFeild = ({ value, showList, setShowList, style, placeholder, editable }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.button}>
                <TouchableOpacity
                    style={{ flexDirection: 'row' }}
                    onPress={() => {
                        setShowList(!showList)
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            marginRight: 4,
                            fontSize: 14,
                        }}>
                        {value}
                    </Text>

                    <Image
                        source={require('../../../assets/expand-arrow.png')}
                        style={{
                            alignSelf: 'center',
                            resizeMode: 'contain',
                            width: 9,
                            transform: [{ rotate: showList ? '0deg' : '180deg' }]
                        }} />
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.text}
                placeholder={placeholder}
                editable={editable}
                placeholderTextColor={'#867890'}>
            </TextInput>
        </View >
    )

}

const styles = StyleSheet.create({
    container: {
        height: 38,
        width: 270,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 38,
        width: 270,
        borderColor: '#7f7f7f',
        borderWidth: 1,
        borderRadius: 25,
    },

    button: {
        marginLeft: 5,
        height: 28,
        width: 70,
        backgroundColor: '#282654',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },


    text: {
        marginHorizontal: 20,
        flex: 1,
        textAlign: 'right',
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 16,
    },

    placeholderStyle: {
        fontSize: 16,
        color: '#867890',
    }
})

export default ExchangeTextFeild
