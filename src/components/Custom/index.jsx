import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export const ArrowDownIcon = (props) => {
  return (
    <View>
      <Icon name="chevron-small-up" size={25} color={'white'} backgroundColor={props.backgroundColor} />
    </View>
  );
};
export const ArrowUpIcon = (props) => {
  return (
    <View>
      <Icon name="chevron-small-down" size={25} color={'white'} backgroundColor={props.backgroundColor} />
    </View>
  );
};
