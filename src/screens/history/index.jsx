import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import ExchangeChart from '../../components/Exchangechart';
import NavBar from '../../components/navbar';

import Icon from 'react-native-vector-icons/Entypo';
import globalStyles from '../../../style.global';
import DropDownPicker from 'react-native-dropdown-picker';
function History({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.positionRelative }}>
      <View style={{ ...globalStyles.positionAbsolute }}>
        <Image source={require('../../../assets/backgroudExchangeScreen.png')}></Image>

        <View style={{ position: 'absolute', left: 0 }}>
          <View style={{ flexDirection: 'row', marginTop: 76 }}>
            <View>
              <Icon.Button
                name="chevron-thin-left"
                size={25}
                color={'#FF2CDF'}
                backgroundColor={'#221F3A'}
                onPress={() => {
                  navigation.navigate('WellCome');
                }}
              ></Icon.Button>
            </View>
            <Text style={{ color: 'white', fontSize: 20, marginLeft: 60 }}>Lịch sử giao dịch</Text>
          </View>
          <View style={{ alignItems: 'center', width: Dimensions.get('window').width, marginTop: 30 }}>
            <View style={{ zIndex: 2, flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontSize: 25 }}>$1000</Text>
              {/* <DropDownPicker style={{ width: 100 }} open={open} value={value} items={items} setOpen={setOpen} setValue={setValue} setItems={setItems} /> */}
            </View>
            <ExchangeChart />
          </View>
        </View>
      </View>
      <View style={{ ...globalStyles.positionAbsolute, bottom: 0 }}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
}

export default History;
