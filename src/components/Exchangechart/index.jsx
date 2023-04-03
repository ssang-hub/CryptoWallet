import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View, Dimensions } from 'react-native';

export default function ExchangeChart() {
  return (
    <View>
      <LineChart
        data={{
          labels: ['1W', '1M', '3M', '6M', '1Y'],
          datasets: [
            {
              data: [20, 45, 28, 80, 30],
            },
            {
              data: [29, 5, 38, 50, 60],
            },
          ],
        }}
        width={Dimensions.get('window').width * 0.85}
        height={220}
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#37307080',
          backgroundGradientTo: '#373070e6',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
