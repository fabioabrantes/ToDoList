import { View, Image,Text } from 'react-native';

import EmptyIMG from '../../assets/Empty.png';
import { styles } from './styles';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={EmptyIMG} />
      <Text style={styles.textListEmpty}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.subtextListEmpty}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}

