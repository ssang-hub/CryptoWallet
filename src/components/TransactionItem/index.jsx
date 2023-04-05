import { View, Text, Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;
import globalStyles from '../../../style.global';

const TransactionItem = () => {
  return (
    <View style={styles.transactionItem}>
      <View style={styles.transactionItemContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ backgroundColor: '#FA9F42', width: 16, height: 16, borderRadius: 50 }} />
          <View>
            <Text>Etherenum</Text>
            <Text>Arp 22</Text>
          </View>
        </View>

        <View>
          <Text>-$123</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  transactionItem: {
    width: windowWidth,
    marginVertical: 10,
    ...globalStyles.centerInView,
  },
  transactionItemContainer: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    justifyContent: 'space-around',
    backgroundColor: '#282654',
    borderRadius: 50,
    paddingVertical: 10,
  },
});

export default TransactionItem;
