import React, { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const listButton = ['30m', '1h', '1d']

const Card = () => {
    const [buttonSelected, setSelected] = useState(0)
    return (
        <View style={styles.card}>
            <View style={styles.cardTop}>
                <View style={styles.cardTopLeft}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
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
        alignItems: 'center',
    },

    cardTopRight: {
        flex: 1,
        alignItems: 'center',
    },

    circle: {
        marginRight: 14,
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

export default Card;