import { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { ButtonIcon } from '../ButtonIcon';

export type TaskType = {
  id: string;
  name: string;
  taskCheck:boolean;
}
type Props = {
  task: TaskType,
  remove: (id: string) => void;
  toggleTaskCompleted: (taskParams:TaskType)=>void;
}

export function Task({ task, remove,toggleTaskCompleted }: Props) {
  const [checkout, setCheckout] = useState(false);

  function handleCheckout() {
    setCheckout(!checkout);
    toggleTaskCompleted({...task,taskCheck:checkout});
  }

  return (
    <View style={styles.container}>
      <ButtonIcon
        iconName={!checkout ? 'circle-o' : 'check-circle'}
        onPress={handleCheckout}
      />

      <View style={styles.containerNameTask}>
        <Text style={[styles.nameTask, checkout && {color:"#808080", textDecorationLine:"line-through"}]} >
          {task.name}
        </Text>
      </View>

      <ButtonIcon
        iconName='trash-outline'
        onPress={() => remove(task.id)}
      />
    </View>
  );
}

