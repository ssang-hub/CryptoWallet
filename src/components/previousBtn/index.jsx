import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { View } from 'react-native';

function PreviousBtn({ navigation }) {
  return (
    <View>
      <Icon.Button
        name="chevron-thin-left"
        size={25}
        color={'#FF2CDF'}
        backgroundColor={'#221F3A'}
        onPress={() => {
          navigation.navigate('home');
        }}
      ></Icon.Button>
    </View>
  );
}

export default PreviousBtn;
