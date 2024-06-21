import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  iconName: 'trash-outline' | 'check-circle' | 'circle-o';
}
export function ButtonIcon({ iconName, ...rest }: Props) {
  const color = iconName === "circle-o"
  //#5E60CE
  //#F2F2F2
  return (
    <TouchableOpacity style={styles.button} {...rest} >
      {
        iconName === "trash-outline" ?
          (<Ionicons name={iconName} size={32} color="#808080" />)
          :
          (<FontAwesome name={iconName} size={32} color="#5E60CE" />)
      }
    </TouchableOpacity>
  );
}

