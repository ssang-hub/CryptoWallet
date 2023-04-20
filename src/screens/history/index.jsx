import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import ExchangeChart from '../../components/Exchangechart';
import NavBar from '../../components/navbar';
import TransactionItem from '../../components/TransactionItem';
import PrevioustBtn from '../../components/previousBtn';
import globalStyles from '../../../style.global';
import DropDownPicker from 'react-native-dropdown-picker';
import { accountTargetSelector, historySelector } from '../../store/selector';
import { useSelector } from 'react-redux';

const windowWidth = Dimensions.get('window').width;

function History({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('apple');
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  const accTarget = useSelector(accountTargetSelector);

  const myhistory = useSelector(historySelector);

  return (
    <View style={{ ...globalStyles.container, ...globalStyles.positionRelative }}>
      <View style={{ ...globalStyles.positionAbsolute }}>
        <Image style={{ width: windowWidth }} source={require('../../../assets/backgroudExchangeScreen.png')}></Image>

        <View style={{ position: 'absolute', left: 0 }}>
          <View style={{ flexDirection: 'row', marginTop: 50 }}>
            <PrevioustBtn navigation={navigation} />
            <Text style={{ color: 'white', fontSize: 20, marginLeft: 80 }}>Lịch sử giao dịch</Text>
          </View>
          <View style={{ width: windowWidth, ...globalStyles.centerInView }}>
            <View style={styles.chart}>
              <View style={{ zIndex: 2, width: '70%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ color: 'white', fontSize: 25 }}>${accTarget.balance}</Text>
                </View>
                <View style={{ position: 'relative' }}>
                  <View style={{ position: 'absolute', top: '44%', left: '15%' }}>
                    <View style={{ backgroundColor: '#DFA1ED', width: 10, height: 10, ...globalStyles.shadowBox }} />
                  </View>
                  <DropDownPicker
                    textStyle={{ color: 'white' }}
                    listItemLabelStyle={{ color: 'black' }}
                    style={styles.drop_down_styles}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                  />
                </View>
              </View>
              <ExchangeChart />
            </View>
          </View>
          <View style={{ flex: 5, height: 150 }}>
            <FlatList data={myhistory} renderItem={({ item }) => <TransactionItem item={item} />} keyExtractor={(item) => item.id} />
          </View>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ textDecorationLine: 'underline', color: 'white' }}>Xem thêm</Text>
          </View>
        </View>
      </View>
      <View style={{ ...globalStyles.positionAbsolute, bottom: 0 }}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chart: {
    alignItems: 'center',
    width: '90%',
    marginTop: 30,
    width: windowWidth * 0.9,
    paddingTop: 20,
    backgroundColor: '#221F3A',
    borderRadius: 30,
  },
  drop_down_styles: {
    width: 130,
    backgroundColor: '#8020ef3d',
    paddingLeft: 40,
    border: 1,
    borderColor: '#8020EF',
    borderRadius: 30,
  },
});

export default History;
