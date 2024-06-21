import { View,Image } from 'react-native';

import LogoToDo from '../../assets/Logo.png';
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
       <Image style={styles.logo} source={LogoToDo} />
    </View>
  );
}

