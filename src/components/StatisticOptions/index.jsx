import { View, StyleSheet, TouchableOpacity, Button, Text, TextInput } from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { ArrowDownIcon, ArrowUpIcon } from '../Custom';
import DateTimeInput from './dateTimeInput';
import globalStyles from '../../../style.global';

function StatisticOptions() {
  const [coin1, setCoin1] = useState([
    { label: 'Bitcoin', value: 'Bitcoin' },
    { label: 'Ethereum', value: 'Ethereum' },
  ]);
  const [coin2, setCoin2] = useState([
    { label: 'Bitcoin', value: 'Bitcoin' },
    { label: 'Ethereum', value: 'Ethereum' },
  ]);
  // const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [coin1Selected, setcoin1Selected] = useState('Bitcoin');
  const [coin2Selected, setcoin2Selected] = useState('Ethereum');

  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', zIndex: 2, marginVertical: 15 }}>
        <View>
          <View style={{ ...styles.buttonDropdown, backgroundColor: '#DFA1ED' }} />
          <DropDownPicker
            textStyle={{ color: 'white' }}
            listItemLabelStyle={{ color: 'black' }}
            style={{ ...styles.drop_down_styles, borderRadius: 30 }}
            open={open === 1}
            value={coin1Selected}
            ArrowDownIconComponent={ArrowDownIcon}
            ArrowUpIconComponent={ArrowUpIcon}
            items={coin1}
            setOpen={() => setOpen(1)}
            onClose={() => setOpen(0)}
            setValue={setcoin1Selected}
          />
        </View>
        <View>
          <View style={{ ...styles.buttonDropdown, backgroundColor: '#8CFFDA' }} />
          <DropDownPicker
            textStyle={{ color: 'white' }}
            listItemLabelStyle={{ color: 'black' }}
            style={{ ...styles.drop_down_styles, borderRadius: 30 }}
            open={open === 2}
            value={coin2Selected}
            ArrowDownIconComponent={ArrowDownIcon}
            ArrowUpIconComponent={ArrowUpIcon}
            items={coin2}
            setOpen={() => setOpen(2)}
            onClose={() => setOpen(0)}
            setValue={setcoin2Selected}
          />
        </View>
      </View>
      <DateTimeInput />
      {/* choose day begin and day end */}
    </View>
  );
}
const styles = StyleSheet.create({
  buttonDropdown: { width: 10, height: 10, ...globalStyles.shadowBox, position: 'absolute', zIndex: 2, top: '40%', left: '10%' },
  drop_down_styles: {
    width: 150,
    backgroundColor: '#221F3A',
    paddingLeft: 40,
    borderRadius: 0,
    border: 0,
    borderColor: 'none',
  },
});
export default StatisticOptions;
