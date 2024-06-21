import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import uuid from "react-native-uuid";

import { Header } from '../../components/Header';
import { InfoTask } from '../../components/InfoTask';

import { styles } from './styles';
import { EmptyList } from '../../components/EmptyList';
import { Task, TaskType } from '../../components/Task';

export function Home() {
  const [nameTask, setNameTask] = useState('');
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [borderBoxColor, setBorderBoxColor] = useState('#0D0D0D');

  function handleOnFocus(e: any) {
    setBorderBoxColor('#5E60CE');
  };

  function handleOnBlur(e: any) {
    setBorderBoxColor('#0D0D0D');
  };

  function handleAddTask() {
    if (nameTask === '' || nameTask.length < 3) {
      return Alert.alert('Error:', 'Digite uma tarefa válida');
    }

    const task = tasks.find(task => task.name === nameTask);
    if (task) {
      return Alert.alert('Error:', 'Já existe uma tarefa com mesmo nome na lista');
    }
    const id = uuid.v4() as string;
    const newTask = {
      id,
      name: nameTask,
      taskCheck:false,
    }

    setTasks(prevState => [...prevState, newTask]);
    setNameTask('');
  }

  function handleRemoveTask(id: string) {
    Alert.alert('Remove', `Deseja realmente remover a tarefa?`, [
      {
        text: 'sim',
        onPress: () => {
          setTasks(tasks.filter(task => task.id !== id))
        }
      }, {
        text: 'não'
      }
    ]);
  }

  function handleToggleTaskCompleted(taskParams: TaskType){
    const tasksUpdated = tasks.map(task=>{
      if(task.id === taskParams.id){
        task.taskCheck = !taskParams.taskCheck;
      }
      return task;
    });
    setTasks(tasksUpdated);
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={[styles.input, { borderColor: borderBoxColor, borderWidth: 1 }]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            onChangeText={setNameTask}
            value={nameTask}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Ionicons name="add-circle-outline" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.tasks}>
          <View style={styles.tasksInfo}>
            <InfoTask title="Criadas" count={tasks.length} />
            <InfoTask 
              title="Concluídas" 
              count={tasks.filter(task=>task.taskCheck!=false).length} 
            />
          </View>

          <FlatList
            data={tasks}
            keyExtractor={task => task.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Task 
                task={item} 
                remove={() => handleRemoveTask(item.id)} 
                toggleTaskCompleted={handleToggleTaskCompleted}
              />
            )}
            ListEmptyComponent={() => (<EmptyList />)}
          />
        </View>
      </View>
    </View>
  );
}

