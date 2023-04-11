import React, { useState } from 'react';
import globalStyles from '../../../style.global';
import { View, Image, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import QRCodeContainer from '../QRCode';
const windowWidth = Dimensions.get('window').width;

const NavBar = ({ navigation }) => {
  return (
    <View>
      <View style={{ ...globalStyles.positionRelative }}>
        <Image style={{ width: windowWidth }} source={require('../../../assets/Rectangle.png')}></Image>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', ...globalStyles.positionAbsolute, bottom: 5, width: '100%' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ marginHorizontal: 12 }}
              onPress={() => {
                navigation.navigate('history');
              }}
            >
              <Image style={styles.navItem} source={require('../../../assets/nav1.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.navItem} source={require('../../../assets/nav2.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ ...globalStyles.positionAbsolute, left: '45%', bottom: '70%' }}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
              <Image source={require('../../../assets/nav5.png')} />
              <Image style={{ ...globalStyles.positionAbsolute, left: '27%', top: '30%' }} source={require('../../../assets/nav6.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <TouchableOpacity
              style={{ marginHorizontal: 12 }}
              onPress={() => {
                navigation.navigate('statistic');
              }}
            >
              <Image style={styles.navItem} source={require('../../../assets/nav3.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('wallets');
              }}
            >
              <Image style={styles.navItem} source={require('../../../assets/nav4.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <View>
        <TouchableOpacity>
          <Text>123</Text>
           <Image></Image> 
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Icon.Button name="person" size={25} color={'#FF2CDF'} backgroundColor={'#221F3A'}></Icon.Button>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  navItem: {
    maxWidth: 30,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default NavBar;
