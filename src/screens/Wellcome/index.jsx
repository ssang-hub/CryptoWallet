import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../../../style.global';
import { checkIfExistingWallet } from '../../main/wallet';

function WellCome({ navigation }) {
  // useEffect(() => {
  //   const check = async () => {
  //     try {
  //       const tesst = await checkIfExistingWallet();
  //       console.log(tesst);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   check();
  // }, []);
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.justifyContentSpaceAround }}>
      <View>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>bubble</Text>
      </View>
      <View>
        <Image source={require('../../../assets/bubble.png')} />
      </View>
      <View style={styles.carousel}>
        <TouchableOpacity style={styles.carouselControl}></TouchableOpacity>
        <TouchableOpacity style={styles.carouselControl}></TouchableOpacity>
        <TouchableOpacity style={styles.carouselControl}></TouchableOpacity>
      </View>
      <View>
        <LinearGradient colors={['#0014FF', '#8020EF', '#FF2CDF']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={globalStyles.buttonLinear}>
          <TouchableOpacity onPress={() => navigation.navigate('newWallet')}>
            <Text style={{ color: 'white' }}>Tạo ví mới</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    flexDirection: 'row',
  },
  carouselControl: {
    width: 12,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 50,
    marginHorizontal: 5,
  },
});
export default WellCome;
