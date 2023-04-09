import React from 'react';
import { StyleSheet, View } from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from 'victory-native';

export default function App() {
  const data = [
    { month: 'Jan', person1: 180, person2: 170 },
    { month: 'Feb', person1: 175, person2: 165 },
    { month: 'Mar', person1: 183, person2: 173 },
    { month: 'Apr', person1: 178, person2: 168 },
    { month: 'May', person1: 182, person2: 172 },
  ];

  return (
    <View>
      <VictoryChart>
        <VictoryAxis style={{ axis: { display: 'none' }, tickLabels: { fill: 'gray' } }} />
        <VictoryAxis dependentAxis style={{ axis: { display: 'none' } }} tickFormat={() => ''} />
        <VictoryGroup offset={20} colorScale={'qualitative'}>
          <VictoryBar data={data} x="month" y="person1" color="#FA9F42" cornerRadius={{ topLeft: 5, topRight: 5 }} barWidth={7} />
          <VictoryBar data={data} x="month" y="person2" color="#8CFFDA" cornerRadius={{ topLeft: 5, topRight: 5 }} barWidth={7} />
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
}
