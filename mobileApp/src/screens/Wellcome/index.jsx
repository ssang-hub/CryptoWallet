import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function WellCome({ navigation }) {
  return (
    <View style={styles.container}>
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
        <LinearGradient colors={['#0014FF', '#8020EF', '#FF2CDF']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('newWallet')}>
            <Text style={{ color: 'white' }}>Tạo ví mới</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#221F3A',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
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

  button: {
    paddingHorizontal: 50,
    borderRadius: 50,
    paddingVertical: 10,
  },
});
export default WellCome;
