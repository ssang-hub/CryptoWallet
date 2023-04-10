import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native'


const DropDownList = ({ data = [], show, setShow, setSelected, style }) => {

    return (
        <View style={[styles.container, style]}>
            <ScrollView style={{ elevation: 5 }}>
                {data.map((val) => {
                    return (
                        <TouchableOpacity
                            key={val}
                            onPress={() => {
                                setSelected(val)
                                setShow(!show)
                            }}>
                            <Text style={{
                                color: '#FFFFFF'
                            }}>
                                {val}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282654',
        position: 'absolute',
        top: 36,
        margin: 5,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        zIndex: 10,
    },
    selection: {
        backgroundColor: '#282654',
    },
})

export default DropDownList
