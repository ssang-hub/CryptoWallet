import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import GroupBarChar from '../../components/BarChar';
import globalStyles from '../../../style.global';
import Icon from 'react-native-vector-icons/Entypo';
import NavBar from '../../components/navbar';

function Statistic({ navigation }) {
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.positionRelative }}>
      <View style={{ ...globalStyles.positionAbsolute }}>
        <Image source={require('../../../assets/backgroudExchangeScreen.png')}></Image>
      </View>
      <View style={{ position: 'absolute' }}>
        <View style={{ flexDirection: 'row', marginTop: 76, left: 0, width: '60%', justifyContent: 'space-between' }}>
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
          <Text style={{ color: 'white', fontSize: 20 }}>Thống Kê</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'white', width: '50%', marginTop: 20 }}>Chọn loại tiền ảo và khoảng thời gian bạn muốn kiểm tra</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <GroupBarChar />
        </View>
      </View>
      <View style={{ bottom: 0, position: 'absolute' }}>
        <NavBar navigation={navigation} />
      </View>
      {/* <ExchangeChart /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Statistic;
