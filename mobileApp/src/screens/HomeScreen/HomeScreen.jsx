import React from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const dataFlat = [1, 2];

function HomeScreen() {

    return (
        <View style={{ flex: 1 }}>
            <Image source={require('../../../assets/bgImg.png')} style={styles.imageBG} />
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.infomation}>
                        <Text style={styles.nameAccount}> Account 1</Text>
                        <Text style={styles.money}> 10000 ETH</Text>
                    </View >
                    <View style={styles.pagerView}>
                        <View style={styles.titlePageView}>
                            <Text style={styles.tokensText}>Tokens</Text>
                        </View>
                        <View style={styles.cardView}>
                            <FlatList data={dataFlat}
                                renderItem={({ item }) => (
                                    <View style={styles.card}>
                                        <View style={styles.cardTop}>
                                            <View style={styles.cardTopLeft}>
                                                <View style={{ flexDirection: 'row', }}>
                                                    <View style={styles.circle} />
                                                    <Text style={{ fontWeight: 600, fontSize: 20, color: '#FFFFFF' }}>USD Coin</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ fontWeight: 300, fontSize: 18, color: '#20FC8F', marginRight: 10, }}>+22.4%</Text>
                                                    <Text style={{ fontWeight: 300, fontSize: 18, color: '#CACACA' }}>in 30m</Text>
                                                </View>
                                            </View>
                                            <View style={styles.cardTopRight}>

                                            </View>
                                        </View>
                                        <View style={styles.cardCenter}>

                                        </View>
                                        <View style={styles.cardBottom}>

                                        </View>
                                    </View>
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
        marginTop: 200,
        color: '#fff'
    },

    money: {
        fontSize: 40,
        fontWeight: 600,
        textAlign: 'center',
        color: '#FFCDEA',
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
        borderBottomColor: '#373070',
        borderBottomWidth: 1,
        borderTopColor: '#373070',
        borderTopWidth: 1,
    },

    cardBottom: {
        flex: 1.5,
    },

})

export default HomeScreen;
