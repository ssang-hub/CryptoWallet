import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
function DateTimeInput() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [showPicker, setShowPicker] = useState(false);
  const StartDateChange = (e, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowPicker((prevState) => !prevState);
    setStartDate(currentDate);
  };
  const EndDateChange = (e, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowPicker((prevState) => !prevState);
    setEndDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity onPress={() => setShowPicker('start')}>
            <Text style={{ padding: 10, color: 'white' }}>{format(startDate, 'dd/MM/yyyy')}</Text>
            {showPicker === 'start' && <DateTimePicker testID="dateTimePicker" value={startDate} mode="date" is24Hour={true} display="default" onChange={StartDateChange} />}
          </TouchableOpacity>
          <TouchableOpacity style={{ borderLeftColor: '#8020EF', borderLeftWidth: 1 }} onPress={() => setShowPicker('end')}>
            <Text style={{ padding: 10, color: 'white' }}>{format(endDate, 'dd/MM/yyyy')}</Text>
            {showPicker === 'end' && <DateTimePicker testID="dateTimePicker2" value={endDate} mode="date" is24Hour={true} display="default" onChange={EndDateChange} />}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  drop_down_styles: {
    width: 150,
    backgroundColor: '#221F3A',
    paddingLeft: 40,
    borderRadius: 0,
    border: 0,
    borderColor: 'none',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  dateContainer: { backgroundColor: '#221F3A', paddingHorizontal: 10, borderRadius: 10, marginBottom: 10 },
});

export default DateTimeInput;
