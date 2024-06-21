import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
  count: number;
}
export function InfoTask({ title, count }: Props) {
  const cor = title === "Criadas" ? "#4EA8DE" : "#8284FA";
  return (
    <View style={styles.containerTitle}>
      <Text style={[styles.textTitle, { color: cor }]}>{title}</Text>

      <View style={styles.containerCount}>
        <Text style={styles.textCount}>{count}</Text>
      </View>
    </View>
  );
}

