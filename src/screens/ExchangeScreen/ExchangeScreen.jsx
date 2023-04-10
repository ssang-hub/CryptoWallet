import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native'
import NavBar from '../../components/navbar'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ExchangeCard from './ExchangeCard'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

function ExchangeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, }}>
            <Image source={require('../../../assets/bgImg.png')} style={styles.imageBG} />
            <View style={styles.container}>
                <View style={styles.body}>
                    <View >
                        <View style={styles.head}>
                            <Image source={require('../../../assets/backIcon.png')} />
                            <Text style={styles.pageTitle}>Trao đổi</Text>
                        </View>
                        <View style={styles.information}>
                            <Text
                                style={{
                                    color: '#FFFFFF',
                                    fontSize: 18,
                                    fontWeight: 400,
                                }}> Available balance</Text>
                            <Text style={styles.money}>$6,500</Text>
                        </View>
                        <View style={styles.body}>
                            <ExchangeCard />
                        </View>
                    </View>
                </View>
                <View>
                    <NavBar navigation={navigation}></NavBar>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    body: {
        flex: 9,
        alignItems: 'center',
    },

    bottomBar: {
        flex: 1,
        backgroundColor: 'red',
    },

    imageBG: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#221F3A',
    },

    head: {
        justifyContent: 'flex-start',
        width: windowWidth - 80,
        margin: 70,
        flexDirection: 'row'
    },


    pageTitle: {
        flex: 1,
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        marginLeft: -12,
    },

    information: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    money: {
        color: '#FFCDEA',
        fontWeight: 600,
        fontSize: 38,
        margin: 14,
    }

})

export default ExchangeScreen