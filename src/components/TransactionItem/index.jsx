import { View, Text, Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;
import globalStyles from '../../../style.global';

const TransactionItem = ({ item }) => {
  return (
    <View style={styles.transactionItem}>
      <View style={styles.transactionItemContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', position: 'relative' }}>
            <View style={styles.statusItem} />
          </View>
          <View style={{ width: 150 }}>
            <Text style={styles.textWhite}>{item.symbol}</Text>
            <Text style={styles.textWhite}>{item.date}</Text>
          </View>
        </View>

        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.textWhite}>
            {item.type === 'send' ? '- ' : '+ '}${item.value}
          </Text>
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
  statusItem: {
    backgroundColor: '#FA9F42',
    width: 16,
    height: 16,
    borderRadius: 50,
    marginRight: 15,
  },
  textWhite: {
    color: 'white',
  },
});

export default TransactionItem;
