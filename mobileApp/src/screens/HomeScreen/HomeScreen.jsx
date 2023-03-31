import React from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity, Button } from 'react-native'
import { useState } from 'react'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const dataFlat = [1, 2]
const listButton = ['30m', '1h', '1d']


function HomeScreen({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <Image source={require('../../../assets/bgImg.png')} style={styles.imageBG} />
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.infomation}>
                        <Text style={styles.nameAccount}> Account 1</Text>
                        <Text style={styles.money}> 10000 ETH</Text>
                        <View style={styles.funtion}>
                            <TouchableOpacity onPress={() => { navigation.navigate('SendCoin') }}>
                                <View style={styles.functionIcon}>
                                    <Image source={require('../../../assets/send.png')} />
                                </View>
                                <Text style={styles.funtionText}>Gửi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.functionIcon}>
                                    <Image source={require('../../../assets/receive.png')} />
                                </View>
                                <Text style={styles.funtionText}>Nhận</Text>
                            </TouchableOpacity>
                        </View>
                    </View >
                    <View style={styles.pagerView}>
                        <View style={styles.titlePageView}>
                            <Text style={styles.tokensText}>Tokens</Text>
                        </View>
                        <View style={styles.cardView}>
                            <FlatList data={dataFlat}
                                renderItem={({ item }) => (
                                    <Card style={styles.card} />
                                )}
                                horizontal
                                pagingEnabled
                                snapToAlignment='center'
                                style={{ flex: 1 }}>

                            </FlatList>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomBar}>

                </View>
            </View>
        </View>
    )
}

const Card = (props) => {
    const [buttonSelected, setSelected] = useState(0)
    return (
        <View style={styles.card}>
            <View style={styles.cardTop}>
                <View style={styles.cardTopLeft}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={styles.circle} />
                        <Text style={{ fontWeight: 600, fontSize: 20, color: '#FFFFFF' }}>USD Coin</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            style={{ fontWeight: 300, fontSize: 18, color: '#20FC8F', marginRight: 10, }}>+22.4%</Text>
                        <Text style={{ fontWeight: 300, fontSize: 18, color: '#CACACA' }}>{listButton[buttonSelected]}</Text>
                    </View>
                </View>
                <View style={styles.cardTopRight}>
                    <Text>ve bieu do</Text>
                </View>
            </View>
            <View style={styles.cardCenter}>
                <View style={{ flex: 1, borderRightWidth: 1, borderRightColor: '#373070', justifyContent: 'center', marginVertical: 12 }}>
                    <Text style={styles.cardCenterText}>$45,678,123</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginVertical: 12 }}>
                    <Text style={styles.cardCenterText}>-12.77{'('}20%{')'}</Text>
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

    infomation: {
        flex: 1,
    },

    nameAccount: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 140,
        color: '#fff',
    },

    money: {
        fontSize: 40,
        fontWeight: 600,
        textAlign: 'center',
        color: '#FFCDEA',
    },

    funtion: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 50,
    },

    functionIcon: {
        width: 40,
        height: 40,
        borderRadius: 30,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    funtionText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 300,
        fontSize: 14,
    },

    pagerView: {
        height: windowHeight * 0.45,
        width: '100%',
        backgroundColor: '#221F3A',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignContent: 'center',
        justifyContent: 'space-around',
        color: '#FFFFFF'
    },

    titlePageView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 48,
    },

    tokensText: {
        fontWeight: 600,
        fontSize: 24,
        color: '#FFFFFF',
    },

    cardView: {
        flex: 5,
    },

    card: {
        backgroundColor: '#292452',
        width: windowWidth - 80,
        marginHorizontal: 40,
        marginBottom: 50,
        borderRadius: 20,
    },

    cardTop: {
        flex: 2,
        margin: 18,
        flexDirection: 'row',
    },

    cardTopLeft: {
        flex: 1,
        justifyContent: 'space-around',
    },

    cardTopRight: {
        flex: 1,
        justifyContent: 'space-between',
    },

    circle: {
        marginRight: 18,
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
        marginHorizontal: 20,
    },
    cardCenterText: {
        flex: 1,
        color: '#CACACA',
        fontSize: 20,
        fontWeight: 500,
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
        width: 60,
        height: 28,
        backgroundColor: '#373070',
        borderColor: '#373070',
        borderRadius: 5,
        borderWidth: 1,

    },

    buttonUnselected: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 28,
        borderColor: '#373070',
        borderRadius: 5,
        borderWidth: 1,

    },

    textbutton: {
        color: '#FFFFFF',
        fontWeight: 500,
        fontSize: 15,
    },

})

export default HomeScreen;
